const name = 'Josh Perez';
const element = <a href='https://www.reactjs.org'>link</a>
const element3 = (
    <div>
        <h1>Hello,123 </h1>
    </div>
);
const element4 = (
    <h1 className='greeting'>
        hello, 4
    </h1>
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez1',
    avatarUrl: ''
};



function JSX() {
    if (user) {
        return <>
            <h1>Hello, {formatName(user)}!</h1>
            {element4}
            <div tabIndex="0"></div>
        </>;
    }
    return <h1>Hello, Stranger.</h1>;

};


export default JSX;