import axios from "axios";

export const Rest = (function() {
    const endpoint = "http://localhost:8000"
    async function fetchData(path , method , body, auth){
      if(!path.startsWith("/")) path = `/${path}`
      if(auth == undefined) auth = ""

      const url = endpoint + path;    

      if(method == "POST") {
        if(body == undefined) body = {}
      //   httpRequest.body = JSON.stringify(body)
      }

      try {
        const result = await axios({
          url,
          method,
          headers: {
            Authorization: auth
          },
          data: body
        })

        return {
          raw: result,
          success: true
        }
      } catch(e) {
        return {
          raw: e,
          success: false
        }
      }

      // try {
      //   const res = await fetch(url, httpRequest)
      //   return await res.json()
      // }
      // catch (e) {
      //   console.log(e);
      //   return e;
      // }
    }
    return {
      endpoint, fetchData
    }
  })()