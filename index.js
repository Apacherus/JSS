/**
 * © Zloy
 * ozver@live.ru
 * https://github.com/Apacherus
 **/

module.exports = function(style){

    function objToStyle(style, parent, parentStyle){
        var _style = null;
        var baseStyle = {};
        var innerStyle = {};
        var baseProps = null;

        //first we need to get all base properties
        var rule;
        for(var selector in style){
            if(style.hasOwnProperty(selector)){

                rule = style[selector];

                if(selector == 'base'){

                    for(var bs in rule){
                        if(rule.hasOwnProperty(bs)) {
                            baseStyle[bs] = rule[bs];

                            if(baseProps == null) baseProps = {};
                            baseProps[bs] = rule[bs];
                        }
                    }
                    continue;
                }
                if(typeof rule != 'object'){
                    baseStyle[selector] = rule;
                }

            }
        }

        var _baseStyle = JSON.parse(JSON.stringify(baseStyle));

        //add parent props
        for(var parentProp in parentStyle){
            if(parentStyle.hasOwnProperty(parentProp)){

                if(!baseStyle.hasOwnProperty(parentProp)) {
                    baseStyle[parentProp] = parentStyle[parentProp];
                }
            }
        }
        _style = function(){
            return baseStyle;
        };

        _style._me = _baseStyle;
        _style._parent = parentStyle;
        if(baseProps != null) {
            _style._base = baseProps;
        }

        //second we calculate inner selectors
        for(selector in style){
            if(style.hasOwnProperty(selector)){

                rule = style[selector];
                if(typeof rule == 'object'){
                    innerStyle[selector] = objToStyle(rule, selector, baseStyle);
                }

            }
        }

        Object.keys(innerStyle).map(function(selector){
            _style[selector] = innerStyle[selector];
        });

        return _style;
    }

    return objToStyle(style);

};