const Eval = (value) => {
    const values = value.split("");
    const out = [];
    const ops = [];
    const allOps = ["*", "/", "+", "-", ")", "("];

    let num = "";
    for (let index = 0; index < values.length; index++) {
        const v = values[index];
        if (v === " ") {
            continue;
        }
        if (!allOps.includes(v)) {
            while (!allOps.includes(values[index]) && values[index] !== " " && index < values.length) {
                num += values[index];
                index++;
            }
            index--;
            out.push(num);
            num = "";
            continue;
        }

        if (v === ")") {
            let top = ops.pop();

            while (top !== "(" && ops.length) {
                out.push(top);
                top = ops.pop();
            }
            if (top !== "(") {
                return "Mismatched parens"
            }
            continue;
        }
        if (ops.length && v !== "(") {
            let top = ops[ops.length - 1];
            let topP = getPrecedence(top);
            const currP = getPrecedence(v);
            while (currP >= topP && top !== "(" && ops.length) {
                out.push(top)
                ops.pop();
                top = ops[ops.length - 1];
                topP = getPrecedence(top);
            }

        }
        ops.push(v);
    }
    while (ops.length) {
        out.push(ops.pop());
    }
    const stack = [];
    out.forEach((o) => {
        if (!allOps.includes(o)) {
            stack.push(parseFloat(o, 10));
        } else {
            const r = stack.pop();
            const l = stack.pop();
            switch (o) {
                case "+":
                    stack.push(l + r);
                    break;
                case "-":
                    stack.push(l - r);
                    break;
                case "*":
                    stack.push(l * r);
                    break;
                case "/":
                    stack.push(l / r);
                    break;
                default :
                    stack.push(0)
                    break
            }
        }
    })

    return "" + stack[0]
}

function getPrecedence(value) {
    const precedence = [["("], ["*", "/"], ["+", "-"]];
    return precedence.findIndex((p)=> {
        return p.includes(value);
    })
}
export default Eval