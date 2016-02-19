JSS is a JavaScript Style

How to use:

1) npm install jss --save
2) import JSS from 'jss'
3) let style = {
    phone: {
        width: '320px',
        height: '480px',
        border: '1px solid black',

        iOS: {
           color: 'red',
           iPhone: {
                width: '480px',
                height: '568px'
           }
        }
    }
};
3) let reactElement = <div style={style.phone.iOS()}>text</div>