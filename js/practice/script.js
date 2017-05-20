const PHONBOOK = [];

function setValue(name, mobile, addr) {
    return {
        name, mobile, addr
    }
}

function getValue() {
    let name = (prompt('Enter Name'));
    let mobile = parseInt(prompt('Mobile no.'));
    let addr = (prompt('Address'));

    PHONBOOK.push(setValue(name, mobile, addr));
}

getValue()
