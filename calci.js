var app = angular.module("myApp", [])
app.controller("myCtrl", function($scope)
{
    $scope.output = "0";
    $scope.nextNumber = true;
    $scope.storedOperation = null;
    $scope.operationToken = "";
    $scope.runningTotal = null;
    $scope.storedValue = null;
    $scope.lastOperation = null;
    $scope.common="0";
    


    $scope.keyevent=function(e){

        //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>aaaaaa",e.key);
        if(e.key==1 || e.key==2 ||  e.key==3 ||  e.key==4 ||  e.key==5 ||  e.key==6 ||  e.key==7 ||  e.key==8 ||  e.key==9 || e.key==0 ||  e.key=="." )
        {
            var abc=e.key;
            $scope.name="keypress";
            e.preventDefault();
            $scope.updateOutput(abc)
        }

        else if(e.key=="+")
        {
            e.preventDefault();
            $scope.add()
        }
        else if(e.key=="-")
        {
            e.preventDefault();
            $scope.subtract()
        }
        else if(e.key=="*")
        {
            e.preventDefault();
            $scope.multiply()
        }
        else if(e.key=="/")
        {
            e.preventDefault();
            $scope.divide()
        }
        else if(e.key=="Enter")
        {
            $scope.calculate()
        }
        else if(e.key=="Backspace")
        {
            $scope.clear()
        }

        else{
            alert("only numeric values are allowed");
            e.preventDefault();
        }
    }   


    $scope.updateOutput = function(btn,evtType)
    {


        if ($scope.output == "0" || $scope.nextNumber)
        {
            $scope.output = btn;
            $scope.nextNumber = false;
            console.log(">>>>>>>>>>>>>>>>>>output",$scope.output)
        }
        else
        {
            $scope.output = $scope.output + String(btn);
            console.log(">>>>>>>>>>>>>>>>>>output1",$scope.output)
        }
        /* if(!($scope.name=="keypress")) {
         $scope.storedValue = parseFloat($scope.output);
         $scope.common = $scope.storedValue;
         }*/

        $scope.storedValue = parseFloat($scope.output);
        $scope.common = $scope.storedValue;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };

    $scope.abc=function()
    {


        if ($scope.storedValue)
        {
            if ($scope.runningTotal && $scope.storedOperation == "ADD")
            {

                $scope.runningTotal += $scope.storedValue;
            }
            else if ($scope.runningTotal && $scope.storedOperation == "SUBTRACT")
            {
                $scope.runningTotal -= $scope.storedValue;
            }
            else if ($scope.runningTotal && $scope.storedOperation == "MULTIPLY")
            {
                $scope.runningTotal *= $scope.storedValue;
            }
            else if ($scope.runningTotal && $scope.storedOperation == "DIVIDE")
            {
                $scope.runningTotal /= $scope.storedValue;
            }
            else if ($scope.runningTotal && $scope.storedOperation == "MODULUS")
            {
                $scope.runningTotal %= $scope.storedValue;
            }
            else
            {
                $scope.runningTotal = $scope.storedValue;
            }
        }
    };

    $scope.add = function(evtType)
    {


        $scope.abc()
        $scope.operationToken = "+";

        console.log(">>>>>>>>>>>>>>>>>>>common",$scope.common);
        setOutput(String($scope.runningTotal));
        $scope.storedOperation = "ADD";
        $scope.nextNumber = true;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };

    $scope.subtract = function(evtType)
    {
        $scope.abc()
        $scope.operationToken = "-";
        $scope.common=$scope.operationToken;
        setOutput(String($scope.runningTotal));
        $scope.storedOperation = "SUBTRACT";
        $scope.nextNumber = true;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };



    $scope.multiply = function(evtType)
    {
        $scope.abc()
        $scope.operationToken = "*";
        $scope.common=$scope.operationToken;
        setOutput(String($scope.runningTotal));
        $scope.storedOperation = "MULTIPLY";
        $scope.nextNumber = true;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };

    $scope.divide = function(evtType)
    {

        $scope.abc()
        $scope.operationToken = "/";
        $scope.common=$scope.operationToken;
        setOutput(String($scope.runningTotal));
        $scope.storedOperation = "DIVIDE";
        $scope.nextNumber = true;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };


    $scope.modulus = function(evtType)
    {

        $scope.abc()

        $scope.operationToken = "%";
        $scope.common=$scope.operationToken;
        setOutput(String($scope.runningTotal));
        $scope.storedOperation = "MODULUS";
        $scope.nextNumber = true;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };


    $scope.calculate = function(evtType)
    {
        if (!$scope.nextNumber)
        {
            $scope.storedValue = parseFloat($scope.output);
            $scope.lastValue = $scope.storedValue;
        }

        if ($scope.storedOperation == "ADD")
        {
            $scope.runningTotal += $scope.storedValue;
            $scope.common=$scope.runningTotal;
        }
        else if ($scope.storedOperation == "SUBTRACT")
        {
            $scope.runningTotal -= $scope.storedValue;
            $scope.common=$scope.runningTotal;
            $scope.lastOperation = "SUBTRACT";
        }
        else if ($scope.storedOperation == "MULTIPLY")
        {
            $scope.runningTotal *= $scope.storedValue;
            $scope.common=$scope.runningTotal;
            $scope.lastOperation = "MULTIPLY";
        }
        else if ($scope.storedOperation == "DIVIDE")
        {
            if($scope.storedValue==0)
            {
                alert("number can't be divide by zero");

                $scope.common= $scope.runningTotal;
            }
            else
            {
                $scope.runningTotal /= $scope.storedValue;
                $scope.common=$scope.runningTotal;
                $scope.lastOperation = "DIVIDE";
            }
        }
        else if ($scope.storedOperation == "MODULUS")
        {
            $scope.runningTotal %= $scope.storedValue;
            $scope.common=$scope.runningTotal;
            $scope.lastOperation = "MODULUS";
        }

        setOutput($scope.runningTotal);
        $scope.operationToken = null;
        $scope.storedOperation = null;
        $scope.storedValue = null;
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };


    $scope.clear = function(evtType)
    {
        $scope.runningTotal = null;
        $scope.storedValue = null;
        $scope.storedOperation = null;
        $scope.common=null;
        setOutput("0");
        if (evtType === 'btnClick') 
        {
            document.querySelector("#txtData").focus();
        }
    };

    setOutput = function(outputString)
    {
        $scope.output = outputString;
        $scope.common=$scope.output
        $scope.nextNumber = true;
    };
});