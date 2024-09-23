function Hello() {

    let myName = 'Niraj'
    let number = 456;
    let fullName = () => {
        return 'Niraj Kumar';
    }
    return <p>
        MessageNo:{number} I am your master {fullName()}
    </p>
}

export default Hello;