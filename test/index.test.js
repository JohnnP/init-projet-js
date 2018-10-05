import assert from "assert";
import { test } from "../src/index";

describe("Test of test framework", function () {
	it("Test should pass", function () {
		assert.equal(test(), 0);
	});
});