import { describe, it, expect, vi } from "vitest";
import { useRandomId } from "./useRandomId";

describe("useRandomId", () => {
  it("positive senario: should generate a consistent 12-character random ID", () => {
    const randomMock = vi.spyOn(Math, "random").mockReturnValue(0.1);

    const expectedId = "gggggggggggg";
    /* eslint qwik/use-method-usage: 0 */
    const actualId = useRandomId();

    expect(actualId).toBe(expectedId);

    randomMock.mockRestore();
  });
});
