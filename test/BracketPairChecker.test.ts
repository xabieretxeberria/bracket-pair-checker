import { Expect, Test, TestCase } from "alsatian";
import { BracketPairChecker } from "../src/BracketPairChecker";

export class BracketPairCheckerTest {

	@Test("It should return true")
	public shouldReturnTrue() {
		let instance = new BracketPairChecker("[()]{}{[()()]()}");

		Expect(instance.CheckBracketPairs()).toBe(true);
	}

	@Test("It should return false")
	public shouldReturnFalse() {
		let instance = new BracketPairChecker("[(])");

		Expect(instance.CheckBracketPairs()).toBe(false);
	}
}