import incrString from "./index";

describe("Test increment string", () => {
  it("Return next numbers", () => {
    expect(incrString("hello 42")).toBe("hello 43");
    expect(incrString("hello world 42")).toBe("hello world 43");
  });

  it("Return first number without separator", () => {
    expect(incrString("hello")).toBe("hello 2");
    expect(incrString("hello world")).toBe("hello world 2");
  });

  it("Return first number with separator", () => {
    expect(incrString("hello", "-1")).toBe("hello-1");
    expect(incrString("hello", "-2")).toBe("hello-2");
    expect(incrString("hello", "-42")).toBe("hello-42");
    expect(incrString("hello world", "-42")).toBe("hello world-42");
    expect(incrString("hello", 1)).toBe("hello 1");
    expect(incrString("hello", 2)).toBe("hello 2");
  });

  it("Change last number with space", () => {
    expect(incrString("toto 2")).toBe("toto 3");
    expect(incrString("toto 9")).toBe("toto 10");
    expect(incrString("toto 10")).toBe("toto 11");
  });

  it("Change last number without space", () => {
    expect(incrString("toto2")).toBe("toto3");
    expect(incrString("toto9")).toBe("toto10");
    expect(incrString("toto10")).toBe("toto11");
  });

  it("Like many numbers on name", () => {
    expect(incrString("ligne 2 place 1")).toBe("ligne 2 place 2");
    expect(incrString("ligne 42 place 42")).toBe("ligne 42 place 43");
    expect(incrString("ligne 42 place 42")).toBe("ligne 42 place 43");
  });

  it("Return 1 when send empty or object parameter", () => {
    expect(incrString("")).toBe("1");
    expect(incrString({} as any)).toBe("1");
  });

  it("Incremente number when send number", () => {
    expect(incrString(3)).toBe(4);
    expect(incrString(41)).toBe(42);
  });

  it("README examples works", () => {
    expect(incrString("Hello world")).toBe("Hello world 2");
    expect(incrString("Hello world 2")).toBe("Hello world 3");
    expect(incrString("Hello world 42")).toBe("Hello world 43");

    expect(incrString("Hello world42")).toBe("Hello world43");
    expect(incrString("Hello 42 world99")).toBe("Hello 42 world100");
    expect(incrString("Hello world-42")).toBe("Hello world-43");
    expect(incrString("Hello world-4242")).toBe("Hello world-4243");

    expect(incrString("Hello world", "-1")).toBe("Hello world-1");
    expect(incrString("Hello world", "-2")).toBe("Hello world-2");
    expect(incrString("Hello world", 1)).toBe("Hello world 1");
    expect(incrString("Hello world", 42)).toBe("Hello world 42");
    expect(incrString("Hello world", "#")).toBe("Hello world#2");
    expect(incrString("Hello world 2", "-2")).toBe("Hello world 3");
  });

  describe("Backward compatibility", () => {
    it("1.0.0", () => {
      expect(incrString("Hello world 42")).toBe("Hello world 43");

      expect(incrString("Hello world")).toBe("Hello world 2");
      expect(incrString("Hello world 2")).toBe("Hello world 3");
      expect(incrString("Hello world 42")).toBe("Hello world 43");

      expect(incrString("Hello world42")).toBe("Hello world43");
      expect(incrString("Hello world99")).toBe("Hello world100");
      expect(incrString("Hello world-42")).toBe("Hello world-43");
      expect(incrString("Hello world-4242")).toBe("Hello world-4243");

      expect(incrString("Hello world", "-")).toBe("Hello world-2");
      expect(incrString("Hello world 2", "-")).toBe("Hello world 3");
    });
  });
});
