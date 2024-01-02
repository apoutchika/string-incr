import { stringIncr } from "./incr";

describe("Test increment string", () => {
  it("should return next numbers", () => {
    expect(stringIncr("hello 42")).toBe("hello 43");
    expect(stringIncr("hello world 42")).toBe("hello world 43");
  });

  it("should return first number without separator", () => {
    expect(stringIncr("hello")).toBe("hello 2");
    expect(stringIncr("hello world")).toBe("hello world 2");
  });

  it("should return first number with separator", () => {
    expect(stringIncr("hello", "-1")).toBe("hello-1");
    expect(stringIncr("hello", "-2")).toBe("hello-2");
    expect(stringIncr("hello", "-42")).toBe("hello-42");
    expect(stringIncr("hello world", "-42")).toBe("hello world-42");
    expect(stringIncr("hello", 1)).toBe("hello 1");
    expect(stringIncr("hello", 2)).toBe("hello 2");
  });

  it("should change last number with space", () => {
    expect(stringIncr("toto 2")).toBe("toto 3");
    expect(stringIncr("toto 9")).toBe("toto 10");
    expect(stringIncr("toto 10")).toBe("toto 11");
  });

  it("should change last number without space", () => {
    expect(stringIncr("toto2")).toBe("toto3");
    expect(stringIncr("toto9")).toBe("toto10");
    expect(stringIncr("toto10")).toBe("toto11");
  });

  it("should like many numbers on name", () => {
    expect(stringIncr("ligne 2 place 1")).toBe("ligne 2 place 2");
    expect(stringIncr("ligne 42 place 42")).toBe("ligne 42 place 43");
    expect(stringIncr("ligne 42 place 42")).toBe("ligne 42 place 43");
  });

  it("should return 1 when send empty or object parameter", () => {
    expect(stringIncr("")).toBe("1");
    expect(stringIncr({} as any)).toBe("1");
  });

  it("should incremente number when send number", () => {
    expect(stringIncr(3)).toBe("4");
    expect(stringIncr(41)).toBe("42");
  });

  it("should README examples works", () => {
    expect(stringIncr("Hello world")).toBe("Hello world 2");
    expect(stringIncr("Hello world 2")).toBe("Hello world 3");
    expect(stringIncr("Hello world 42")).toBe("Hello world 43");

    expect(stringIncr("Hello world42")).toBe("Hello world43");
    expect(stringIncr("Hello 42 world99")).toBe("Hello 42 world100");
    expect(stringIncr("Hello world-42")).toBe("Hello world-43");
    expect(stringIncr("Hello world-4242")).toBe("Hello world-4243");

    expect(stringIncr("Hello world", "-1")).toBe("Hello world-1");
    expect(stringIncr("Hello world", "-2")).toBe("Hello world-2");
    expect(stringIncr("Hello world", 1)).toBe("Hello world 1");
    expect(stringIncr("Hello world", 42)).toBe("Hello world 42");
    expect(stringIncr("Hello world", "#")).toBe("Hello world#2");
    expect(stringIncr("Hello world 2", "-2")).toBe("Hello world 3");
  });

  describe("it should backward compatibility", () => {
    it("1.0.0", () => {
      expect(stringIncr("Hello world 42")).toBe("Hello world 43");

      expect(stringIncr("Hello world")).toBe("Hello world 2");
      expect(stringIncr("Hello world 2")).toBe("Hello world 3");
      expect(stringIncr("Hello world 42")).toBe("Hello world 43");

      expect(stringIncr("Hello world42")).toBe("Hello world43");
      expect(stringIncr("Hello world99")).toBe("Hello world100");
      expect(stringIncr("Hello world-42")).toBe("Hello world-43");
      expect(stringIncr("Hello world-4242")).toBe("Hello world-4243");

      expect(stringIncr("Hello world", "-")).toBe("Hello world-2");
      expect(stringIncr("Hello world 2", "-")).toBe("Hello world 3");
    });
  });
});
