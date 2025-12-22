import { describe, it, expect, vi, afterEach } from "vitest";
import { loadProducts } from "../pages/loadProducts";

describe("productsLoader", () => {
  afterEach(() => {
    vi.restoreAllMocks(); // resets all mocks back to original
  });
  it("returns products on success", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: "Test Product" }]),
      })
    );

    const data = await loadProducts();
    expect(data).toEqual([{ id: 1, name: "Test Product" }]);
  });

  it("throws on error", async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 }));

    await expect(loadProducts()).rejects.toThrow("Failed to load products");
  });
});
