import React from 'react';

// react hello world Dave 5 days of react
/*
#
# day 1 & 2
#
# class component
#
class Hi extends React.Component
{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <h1>{this.props.msg}</h1>
        );
    }
}
#
# arrow function componet
#
const Hi = (props) =>
{
    return (
        <h1>{props.msg}</h1>
    );
}
#
# function component
#
function Hi(props){
    return (
        <h1>Hi <b>{props.msg} 5+1 = {5+1}</b></h1>
    );
}
*/

/* day 3 
#
# use desructuring of props in arrow function component
#
const Hi = ({ name }) => <h1>Hi <b>{ name }</b></h1>;
#
# use desructuring of props in function component
#
function Hi({ name }){
    return (
            <h1>Hi <b>{ name }</b> 5 + 10 = {5+10}</h1>
    );
}
#
# use desructuring of props in class component
#
class Hi extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {name} = this.props;

        return (
            <h1>Hi <b>{ name }</b> 5 + 10 = {5+10}</h1>
        );
    }
}
*/

const Hi = () => <h1>Hello There!</h1>
export default Hi;
