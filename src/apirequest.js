
async function apirequest(url='',optionObj=null,errMsg=null) {
    try{
        const response=fetch(url,optionObj);
     
    }
    catch(e){
        errMsg=e;
    }
    finally{
        return errMsg;

    }

}

export default apirequest;
