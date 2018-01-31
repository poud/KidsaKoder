    function runCode() {
      var code = document.getElementById('code').value;
      code = code.replace("log(","")
      code = code.replace("')","'")
      code = code.replace('")','"')
      code = code.replace(/console./g , "document.getElementById('content').innerHTML = ");
      console.log(code);
      eval(code)
    }
