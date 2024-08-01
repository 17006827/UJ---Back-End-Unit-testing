import assert from "assert"
import yearsAgo from "../function/yearsAgo.js"
describe ("YearsAgo function:", function(){
    it("The yearsAgo computes the difference from the given input e.g(1976): Return the diffrence", function (){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })

    it("The yearsAgo computes the difference from the given input e.g(2000): Return the diffrence", function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
})