import { stringDecr } from "./decr";

describe("Test decrement string", () => {
  it("should return next numbers", () => {
    expect(stringDecr("hello 42")).toBe("hello 41");
    expect(stringDecr("hello world 42")).toBe("hello world 41");
  });

  it("should return first number without separator", () => {
    expect(stringDecr("hello")).toBe("hello -1");
    expect(stringDecr("hello world")).toBe("hello world -1");
  });

  it("should return first number with separator", () => {
    expect(stringDecr("hello", "-1")).toBe("hello-1");
    expect(stringDecr("hello", "-2")).toBe("hello-2");
    expect(stringDecr("hello", "-42")).toBe("hello-42");
    expect(stringDecr("hello world", "-42")).toBe("hello world-42");
    expect(stringDecr("hello", 1)).toBe("hello 1");
    expect(stringDecr("hello", 2)).toBe("hello 2");
    expect(stringDecr("hello", -1)).toBe("hello -1");
  });

  it("should change last number with space", () => {
    expect(stringDecr("toto 2")).toBe("toto 1");
    expect(stringDecr("toto 9")).toBe("toto 8");
    expect(stringDecr("toto 10")).toBe("toto 9");
  });

  it("should change last number without space", () => {
    expect(stringDecr("toto2")).toBe("toto1");
    expect(stringDecr("toto9")).toBe("toto8");
    expect(stringDecr("toto10")).toBe("toto9");
    expect(stringDecr("toto11")).toBe("toto10");
    expect(stringDecr("toto12")).toBe("toto11");
    expect(stringDecr("toto13")).toBe("toto12");
  });

  it("should like many numbers on name", () => {
    expect(stringDecr("ligne 2 place 1")).toBe("ligne 2 place 0");
    expect(stringDecr("ligne 42 place 42")).toBe("ligne 42 place 41");
    expect(stringDecr("ligne 42 place 42")).toBe("ligne 42 place 41");
  });

  it("should return 1 when send empty or object parameter", () => {
    expect(stringDecr("")).toBe("-1");
    expect(stringDecr({} as any)).toBe("-1");
  });

  it("should decremente number when send number", () => {
    expect(stringDecr(3)).toBe(2);
    expect(stringDecr(41)).toBe(40);
  });

  it("should README examples works", () => {
    expect(stringDecr("Hello world")).toBe("Hello world -1");
    expect(stringDecr("Hello world 2")).toBe("Hello world 1");
    expect(stringDecr("Hello world 42")).toBe("Hello world 41");

    expect(stringDecr("Hello world42")).toBe("Hello world41");
    expect(stringDecr("Hello 42 world100")).toBe("Hello 42 world99");
    expect(stringDecr("Hello world-42")).toBe("Hello world-41");
    expect(stringDecr("Hello world-4242")).toBe("Hello world-4241");

    expect(stringDecr("Hello world", "-1")).toBe("Hello world-1");
    expect(stringDecr("Hello world", "-2")).toBe("Hello world-2");
    expect(stringDecr("Hello world", 1)).toBe("Hello world 1");
    expect(stringDecr("Hello world", 42)).toBe("Hello world 42");
    expect(stringDecr("Hello world", "#")).toBe("Hello world#-1");
    expect(stringDecr("Hello world 2", "-2")).toBe("Hello world 1");
  });

  describe("it should backward compatibility", () => {
    it("1.0.0", () => {
      expect(stringDecr("Hello world 42")).toBe("Hello world 41");

      expect(stringDecr("Hello world")).toBe("Hello world -1");
      expect(stringDecr("Hello world 2")).toBe("Hello world 1");
      expect(stringDecr("Hello world 42")).toBe("Hello world 41");

      expect(stringDecr("Hello world42")).toBe("Hello world41");
      expect(stringDecr("Hello world100")).toBe("Hello world99");
      expect(stringDecr("Hello world-42")).toBe("Hello world-41");
      expect(stringDecr("Hello world-4242")).toBe("Hello world-4241");

      expect(stringDecr("Hello world", "-")).toBe("Hello world--1");
      expect(stringDecr("Hello world 2", "-")).toBe("Hello world 1");
    });
  });
});
