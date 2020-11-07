import { Expect, Test } from "alsatian";
import { BracketPairChecker } from "../src/BracketPairChecker";

export class BracketPairCheckerTest {

	@Test("Correct case from the statement")
	public shouldReturnTrue() {
		let instance = new BracketPairChecker("[()]{}{[()()]()}");

		Expect(instance.CheckBracketPairs()).toBe(true);
	}

	@Test("Incorrect case from the statement")
	public shouldReturnFalse() {
		let instance = new BracketPairChecker("[(])");

		Expect(instance.CheckBracketPairs()).toBe(false);
	}

	@Test("Opening character at the end of string")
	public shouldReturnFalseDueToNonEmptyStackAtTheEnd() {
		let instance = new BracketPairChecker("[(])(");

		Expect(instance.CheckBracketPairs()).toBe(false);
	}

	@Test("Closing character when stack is empty")
	public shouldReturnFalseDueToEmptyStack() {
		let instance = new BracketPairChecker("[{}]())");

		Expect(instance.CheckBracketPairs()).toBe(false);
	}

	@Test("Closing character as first of the string")
	public shouldReturnFalseDueToClosingCharAsFirst() {
		let instance = new BracketPairChecker("}()[[{}]]()");

		Expect(instance.CheckBracketPairs()).toBe(false);
	}
}