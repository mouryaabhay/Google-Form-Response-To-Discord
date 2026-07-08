/* ==========================================================
   Google Form -> Discord Config Builder
   Generates a single Code.gs file from the form on the left.
   The logic half of the output is embedded below (base64) and
   must be kept in sync with apps-script/Code.gs by hand whenever
   that file changes. Regenerate + verify with:

     B64=$(base64 -w0 apps-script/Code.gs)
     node -e '
       const fs = require("fs");
       const b64 = fs.readFileSync("/dev/stdin", "utf8").trim();
       let app = fs.readFileSync("ui/app.js", "utf8");
       app = app.replace(/const CODE_GS_B64 = "[^"]*";/, "const CODE_GS_B64 = " + JSON.stringify(b64) + ";");
       fs.writeFileSync("ui/app.js", app);
       const decoded = Buffer.from(b64, "base64").toString("utf8");
       console.log("match:", decoded === fs.readFileSync("apps-script/Code.gs", "utf8"));
     ' <<< "$B64"

   Do not hand-edit CODE_GS_B64 directly — it is long enough that
   manual edits reliably introduce silent corruption.
   ========================================================== */

const CODE_GS_B64 = "LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCiAgICBHb29nbGUgRm9ybSBSZXNwb25zZSBUbyBEaXNjb3JkCiAgICBBdXRvIEZvcnVtIC8gTm9ybWFsIENoYW5uZWwgRGV0ZWN0aW9uIFZlcnNpb24KICAgIEF1dGhvcjogTW91cnlhIEFiaGF5IEFtYXJqZWV0IChEeW5hc3RpYyBDcmVhdG9yKQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8KCmxldCBkaXNjb3JkVGhyZWFkSWQgPSAiIjsKbGV0IGRpc2NvcmRUaHJlYWROYW1lID0gIiI7CmxldCB3ZWJob29rU3VwcG9ydHNGb3J1bSA9IHRydWU7CmxldCBmb3J1bURldGVjdGlvbkRvbmUgPSBmYWxzZTsKCi8qIC0tLS0tLS0tLS0gRGlzY29yZCBMaW1pdHMgLS0tLS0tLS0tLSAqLwpjb25zdCBESVNDT1JEX0xJTUlUUyA9IHsKICBUSFJFQURfTkFNRTogMTAwLAogIERFU0NSSVBUSU9OOiA0MDk2LAogIEZJRUxEX05BTUU6IDI1NiwKICBGSUVMRF9WQUxVRTogMTAyNAp9OwoKLyogLS0tLS0tLS0tLSBDb25maWcgVmFsaWRhdGlvbiAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKCkgewogIGlmICghRElTQ09SRF9XRUJIT09LX1VSTCB8fCBESVNDT1JEX1dFQkhPT0tfVVJMLnN0YXJ0c1dpdGgoIllPVVJfV0VCSE9PS19VUkwiKSkgewogICAgdGhyb3cgbmV3IEVycm9yKCJESVNDT1JEX1dFQkhPT0tfVVJMIGlzIG5vdCBjb25maWd1cmVkLiBVcGRhdGUgQ29uZmlnLmdzIGJlZm9yZSBydW5uaW5nLiIpOwogIH0KfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIE1BSU4gU1VCTUlTU0lPTiBIQU5ETEVSCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwpmdW5jdGlvbiBvblN1Ym1pdChldmVudCkgewogIHZhbGlkYXRlQ29uZmlnKCk7CiAgY29uc3QgZm9ybSA9IEZvcm1BcHAuZ2V0QWN0aXZlRm9ybSgpOwogIGNvbnN0IGxhdGVzdFJlc3BvbnNlID0gZm9ybS5nZXRSZXNwb25zZXMoKS5wb3AoKTsKICBjb25zdCBhbGxJdGVtcyA9IGZvcm0uZ2V0SXRlbXMoKTsgIC8vIEZVTEwgcXVlc3Rpb24gbGlzdAoKICBjb25zdCByZXNwb25zZXMgPSBtYXBSZXNwb25zZXMobGF0ZXN0UmVzcG9uc2UpOwoKICBjb25zdCBkaXNjb3JkTWVzc2FnZUNvbnRlbnQgPSBjcmVhdGVEaXNjb3JkTWVzc2FnZUNvbnRlbnQocmVzcG9uc2VzLCBhbGxJdGVtcyk7CiAgZGlzY29yZFRocmVhZE5hbWUgPSBjcmVhdGVUaHJlYWROYW1lKHJlc3BvbnNlcywgYWxsSXRlbXMpOwoKICBjb25zdCBmaXJzdFBhZ2VRdWVzdGlvbnMgPSBnZXRGaXJzdFBhZ2VRdWVzdGlvbnMoZm9ybSk7CiAgY29uc3QgbWFpbkVtYmVkRmllbGRzID0gY3JlYXRlRW1iZWRGaWVsZHMoZmlyc3RQYWdlUXVlc3Rpb25zLCByZXNwb25zZXMpOwoKICBzZW5kRW1iZWRUb0Rpc2NvcmRXaXRoRmFsbGJhY2sobWFpbkVtYmVkRmllbGRzLCBkaXNjb3JkTWVzc2FnZUNvbnRlbnQpOwoKICBwcm9jZXNzU2VjdGlvbnMoYWxsSXRlbXMsIHJlc3BvbnNlcyk7Cn0KCi8qIC0tLS0tLS0tLS0gTWFwIGFsbCByZXNwb25zZXMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBtYXBSZXNwb25zZXMobGF0ZXN0UmVzcG9uc2UpIHsKICByZXR1cm4gbmV3IE1hcCgKICAgIGxhdGVzdFJlc3BvbnNlLmdldEl0ZW1SZXNwb25zZXMoKS5tYXAoaXRlbSA9PiBbCiAgICAgIGl0ZW0uZ2V0SXRlbSgpLmdldFRpdGxlKCksCiAgICAgIGl0ZW0uZ2V0UmVzcG9uc2UoKQogICAgXSkKICApOwp9CgovKiAtLS0tLS0tLS0tIEhlbHBlcjogR2V0IHF1ZXN0aW9uIGJ5IGluZGV4IGluIEZVTEwgTElTVCAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGdldFF1ZXN0aW9uQnlJbmRleChhbGxJdGVtcywgaW5kZXgpIHsKICBjb25zdCBpdGVtID0gYWxsSXRlbXNbaW5kZXggLSAxXTsKICByZXR1cm4gaXRlbSA/IGl0ZW0uZ2V0VGl0bGUoKSA6IG51bGw7Cn0KCi8qIC0tLS0tLS0tLS0gTWVzc2FnZSBjb250ZW50IHcvIFVzZXIgSUQgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBjcmVhdGVEaXNjb3JkTWVzc2FnZUNvbnRlbnQocmVzcG9uc2VzLCBhbGxJdGVtcykgewogIGNvbnN0IHVzZXJJZFRpdGxlID0gZ2V0UXVlc3Rpb25CeUluZGV4KGFsbEl0ZW1zLCB1c2VySWRRdWVzdGlvbk51bWJlcik7CiAgY29uc3QgdXNlcklEID0gcmVzcG9uc2VzLmdldCh1c2VySWRUaXRsZSkgfHwgIiI7CgogIGNvbnNvbGUubG9nKGBEaXNjb3JkIFVzZXIgSUQ6ICR7dXNlcklEfWApOwogIHJldHVybiBzdWJtaXNzaW9uTWVzc2FnZUNvbnRlbnQucmVwbGFjZSgie2Rpc2NvcmRVc2VySUR9IiwgdXNlcklEKTsKfQoKLyogLS0tLS0tLS0tLSBUaHJlYWQgTmFtZSBCdWlsZGVyIChHTE9CQUwgbG9va3VwKSAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGNyZWF0ZVRocmVhZE5hbWUocmVzcG9uc2VzLCBhbGxJdGVtcykgewogIGNvbnN0IHVzZXJuYW1lVGl0bGUgPSBnZXRRdWVzdGlvbkJ5SW5kZXgoYWxsSXRlbXMsIHVzZXJuYW1lUXVlc3Rpb25OdW1iZXIpOwogIGNvbnN0IHVzZXJuYW1lID0gcmVzcG9uc2VzLmdldCh1c2VybmFtZVRpdGxlKSB8fCAiIjsKCiAgY29uc29sZS5sb2coYERpc2NvcmQgVXNlcm5hbWU6ICR7dXNlcm5hbWV9YCk7CgogIGlmICghdGhyZWFkTmFtZVBvc2l0aW9uKSByZXR1cm4gIiI7CgogIGxldCBuYW1lOwogIHN3aXRjaCAodGhyZWFkTmFtZVBvc2l0aW9uKSB7CiAgICBjYXNlICJzdGFydCI6IG5hbWUgPSBgJHt1c2VybmFtZX0ke3RocmVhZE5hbWVTdGF0aWNUZXh0fWA7IGJyZWFrOwogICAgY2FzZSAiZW5kIjogbmFtZSA9IGAke3RocmVhZE5hbWVTdGF0aWNUZXh0fSR7dXNlcm5hbWV9YDsgYnJlYWs7CiAgICBkZWZhdWx0OiBuYW1lID0gdGhyZWFkTmFtZVN0YXRpY1RleHQ7CiAgfQogIHJldHVybiB0cnVuY2F0ZShuYW1lLCBESVNDT1JEX0xJTUlUUy5USFJFQURfTkFNRSk7Cn0KCi8qIC0tLS0tLS0tLS0gR2V0IGZpcnN0IHBhZ2UgcXVlc3Rpb25zIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gZ2V0Rmlyc3RQYWdlUXVlc3Rpb25zKGZvcm0pIHsKICBjb25zdCBpdGVtcyA9IGZvcm0uZ2V0SXRlbXMoKTsKICBjb25zdCBpZHggPSBpdGVtcy5maW5kSW5kZXgoaSA9PiBpLmdldFR5cGUoKSA9PT0gRm9ybUFwcC5JdGVtVHlwZS5QQUdFX0JSRUFLKTsKICByZXR1cm4gaXRlbXMuc2xpY2UoMCwgaWR4ICE9PSAtMSA/IGlkeCA6IHVuZGVmaW5lZCk7Cn0KCi8qIC0tLS0tLS0tLS0gRW1iZWQgRmllbGQgQnVpbGRlciAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGNyZWF0ZUVtYmVkRmllbGRzKGl0ZW1zLCByZXNwb25zZXMpIHsKICByZXR1cm4gaXRlbXMucmVkdWNlKChmaWVsZHMsIHF1ZXN0aW9uKSA9PiB7CiAgICBsZXQgcmVzcG9uc2UgPSBmb3JtYXRSZXNwb25zZShxdWVzdGlvbiwgcmVzcG9uc2VzKTsKCiAgICBpZiAoIXJlc3BvbnNlIHx8IChza2lwRW1wdHlSZXNwb25zZXMgJiYgcmVzcG9uc2UgPT09IG5vQW5zd2VyTWVzc2FnZSkpIHJldHVybiBmaWVsZHM7CgogICAgZmllbGRzLnB1c2goewogICAgICBuYW1lOiB0cnVuY2F0ZShxdWVzdGlvbi5nZXRUaXRsZSgpLCBESVNDT1JEX0xJTUlUUy5GSUVMRF9OQU1FKSwKICAgICAgdmFsdWU6IHRydW5jYXRlKGAke2VtYmVkRmllbGRWYWx1ZVByZWZpeH0ke3Jlc3BvbnNlfWAsIERJU0NPUkRfTElNSVRTLkZJRUxEX1ZBTFVFKSwKICAgICAgaW5saW5lOiBmYWxzZQogICAgfSk7CgogICAgcmV0dXJuIGZpZWxkczsKICB9LCBbXSk7Cn0KCi8qIC0tLS0tLS0tLS0gRm9ybWF0IHJlc3BvbnNlcyAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGZvcm1hdFJlc3BvbnNlKHF1ZXN0aW9uLCByZXNwb25zZXMpIHsKICBsZXQgcmVzcG9uc2UgPSByZXNwb25zZXMuZ2V0KHF1ZXN0aW9uLmdldFRpdGxlKCkpIHx8IG5vQW5zd2VyTWVzc2FnZTsKCiAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gRm9ybUFwcC5JdGVtVHlwZS5GSUxFX1VQTE9BRCkgcmV0dXJuIGZvcm1hdEZpbGVSZXNwb25zZShyZXNwb25zZSk7CiAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gRm9ybUFwcC5JdGVtVHlwZS5USU1FKSByZXR1cm4gZm9ybWF0VGltZShyZXNwb25zZSk7CiAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGZvcm1hdERhdGVUaW1lKHJlc3BvbnNlKTsKCiAgcmVzcG9uc2UgPSBTdHJpbmcocmVzcG9uc2UpCiAgICAucmVwbGFjZSgvLChcUykvZywgIiwgJDEiKQogICAgLnJlcGxhY2UoL1xuezIsfS9nLCAiXG4iKTsKCiAgcmV0dXJuIHJlc3BvbnNlOwp9CgpmdW5jdGlvbiBmb3JtYXRGaWxlUmVzcG9uc2UocmVzcG9uc2UpIHsKICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UpIHx8IHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG5vQW5zd2VyTWVzc2FnZTsKICByZXR1cm4gcmVzcG9uc2UubWFwKGYgPT4KICAgIC9eaHR0cHM/OlwvXC8vLnRlc3QoZikgPyBmIDogYDxodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/aWQ9JHtmfT5gCiAgKS5qb2luKCJcbiIpOwp9CgpmdW5jdGlvbiBmb3JtYXRUaW1lKHQpIHsKICBjb25zdCBbaCwgbV0gPSB0LnNwbGl0KCI6IikubWFwKE51bWJlcik7CiAgY29uc3QgYW1wbSA9IGggPj0gMTIgPyAiUE0iIDogIkFNIjsKICBjb25zdCBoMTIgPSBoICUgMTIgfHwgMTI7CiAgcmV0dXJuIGAke2gxMn06JHttLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgIjAiKX0gJHthbXBtfWA7Cn0KCmZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lKGRhdGUpIHsKICBjb25zdCB1bml4ID0gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOwogIHJldHVybiBgPHQ6JHt1bml4fTpmPmA7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBTRU5EIEZJUlNUIEVNQkVEIChGT1JVTSBERVRFQ1RJT04pCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwpmdW5jdGlvbiBzZW5kRW1iZWRUb0Rpc2NvcmRXaXRoRmFsbGJhY2soZW1iZWRGaWVsZHMsIGRpc2NvcmRNZXNzYWdlQ29udGVudCkgewogIGNvbnN0IGZvcm1UaXRsZSA9IEZvcm1BcHAuZ2V0QWN0aXZlRm9ybSgpLmdldFRpdGxlKCk7CgogIGNvbnN0IGZvcnVtUGF5bG9hZCA9IHsKICAgIGNvbnRlbnQ6IGRpc2NvcmRNZXNzYWdlQ29udGVudCwKICAgIGVtYmVkczogW3sKICAgICAgY29sb3I6IGdldE5leHRFbWJlZENvbG9yKCksCiAgICAgIGRlc2NyaXB0aW9uOiB0cnVuY2F0ZShlbWJlZERlc2NyaXB0aW9uVGVtcGxhdGUucmVwbGFjZSgie2Zvcm1UaXRsZX0iLCBmb3JtVGl0bGUpLCBESVNDT1JEX0xJTUlUUy5ERVNDUklQVElPTiksCiAgICAgIGZpZWxkczogZW1iZWRGaWVsZHMKICAgIH1dLAogICAgY29tcG9uZW50czogW10KICB9OwoKICBpZiAoQXJyYXkuaXNBcnJheShESVNDT1JEX0ZPUlVNX1RBR1MpICYmIERJU0NPUkRfRk9SVU1fVEFHUy5sZW5ndGggJiYgd2ViaG9va1N1cHBvcnRzRm9ydW0pIHsKICAgIGZvcnVtUGF5bG9hZC5hcHBsaWVkX3RhZ3MgPSBESVNDT1JEX0ZPUlVNX1RBR1M7CiAgfQogIGlmICh3ZWJob29rU3VwcG9ydHNGb3J1bSAmJiAhZGlzY29yZFRocmVhZElkICYmIGRpc2NvcmRUaHJlYWROYW1lICYmIGRpc2NvcmRUaHJlYWROYW1lLnRyaW0oKSAhPT0gIiIpIHsKICAgIGZvcnVtUGF5bG9hZC50aHJlYWRfbmFtZSA9IGRpc2NvcmRUaHJlYWROYW1lOwogIH0KCiAgaWYgKCF3ZWJob29rU3VwcG9ydHNGb3J1bSAmJiBmb3J1bURldGVjdGlvbkRvbmUpIHsKICAgIGNvbnN0IG5vcm1hbFBheWxvYWQgPSB7CiAgICAgIGNvbnRlbnQ6IGRpc2NvcmRNZXNzYWdlQ29udGVudCwKICAgICAgZW1iZWRzOiBmb3J1bVBheWxvYWQuZW1iZWRzLAogICAgICBjb21wb25lbnRzOiBbXQogICAgfTsKICAgIGNvbnN0IG5vcm1hbFJlc3AgPSBzZW5kVG9EaXNjb3JkKG5vcm1hbFBheWxvYWQpOwogICAgbG9nU2VuZFJlc3VsdChub3JtYWxSZXNwLCAibm9ybWFsIChrbm93bikiKTsKICAgIHJldHVybjsKICB9CgogIGNvbnN0IGZpcnN0UmVzcFRleHQgPSBzZW5kVG9EaXNjb3JkKGZvcnVtUGF5bG9hZCk7CiAgY29uc3QgZmlyc3RKc29uID0gdHJ5UGFyc2VKc29uKGZpcnN0UmVzcFRleHQpOwoKICBpZiAoaW5kaWNhdGVzTm90Rm9ydW0oZmlyc3RKc29uKSkgewogICAgd2ViaG9va1N1cHBvcnRzRm9ydW0gPSBmYWxzZTsKICAgIGZvcnVtRGV0ZWN0aW9uRG9uZSA9IHRydWU7CiAgICBjb25zb2xlLndhcm4oIuKaoO+4jyBOb3QgYSBmb3J1bS4gU3dpdGNoaW5nIHRvIE5PUk1BTCBNT0RFLiIpOwoKICAgIGNvbnN0IG5vcm1hbFBheWxvYWQgPSB7CiAgICAgIGNvbnRlbnQ6IGRpc2NvcmRNZXNzYWdlQ29udGVudCwKICAgICAgZW1iZWRzOiBmb3J1bVBheWxvYWQuZW1iZWRzLAogICAgICBjb21wb25lbnRzOiBbXQogICAgfTsKICAgIGNvbnN0IHNlY29uZFJlc3BUZXh0ID0gc2VuZFRvRGlzY29yZChub3JtYWxQYXlsb2FkKTsKICAgIGxvZ1NlbmRSZXN1bHQoc2Vjb25kUmVzcFRleHQsICJub3JtYWwgKHJlc2VuZCkiKTsKICAgIHJldHVybjsKICB9CgogIGlmIChmaXJzdEpzb24gJiYgZmlyc3RKc29uLmNoYW5uZWxfaWQpIHsKICAgIGRpc2NvcmRUaHJlYWRJZCA9IGZpcnN0SnNvbi5jaGFubmVsX2lkOwogIH0gZWxzZSBpZiAoZmlyc3RKc29uICYmIGZpcnN0SnNvbi5pZCAmJiAhZGlzY29yZFRocmVhZElkKSB7CiAgICBkaXNjb3JkVGhyZWFkSWQgPSBmaXJzdEpzb24uaWQ7CiAgfQoKICBmb3J1bURldGVjdGlvbkRvbmUgPSB0cnVlOwogIGxvZ1NlbmRSZXN1bHQoZmlyc3RSZXNwVGV4dCwgImZvcnVtIChmaXJzdCBzZW5kKSIpOwp9CgovKiAtLS0tLS0tLS0tIEhlbHBlcnMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiB0cnlQYXJzZUpzb24odGV4dCkgewogIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIChlKSB7IHJldHVybiBudWxsOyB9Cn0KCmZ1bmN0aW9uIGluZGljYXRlc05vdEZvcnVtKGpzb24pIHsKICBpZiAoIWpzb24pIHJldHVybiBmYWxzZTsKICBjb25zdCBlcnJDb2RlID0ganNvbi5jb2RlOwogIGlmIChlcnJDb2RlID09PSAyMjAwMDMgfHwgZXJyQ29kZSA9PT0gMjIwMDAxKSByZXR1cm4gdHJ1ZTsKICBpZiAoanNvbi5tZXNzYWdlICYmIC9mb3J1bXx0aHJlYWRfbmFtZXxhcHBsaWVkX3RhZ3MvaS50ZXN0KGpzb24ubWVzc2FnZSkpIHJldHVybiB0cnVlOwogIHJldHVybiBmYWxzZTsKfQoKZnVuY3Rpb24gbG9nU2VuZFJlc3VsdChyZXNwb25zZVRleHQsIHRhZykgewogIGNvbnN0IGogPSB0cnlQYXJzZUpzb24ocmVzcG9uc2VUZXh0KTsKICBpZiAoaiAmJiBqLmNvZGUpIGNvbnNvbGUud2FybihgRGlzY29yZCBlcnJvciAoJHt0YWd9KTpgLCBqKTsKICBlbHNlIGNvbnNvbGUubG9nKGBTZW50ICgke3RhZ30pYCk7Cn0KCi8qIC0tLS0tLS0tLS0gU2VuZGVyIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gc2VuZFRvRGlzY29yZChwYXlsb2FkKSB7CiAgdHJ5IHsKICAgIGNvbnN0IHVybCA9IGAke0RJU0NPUkRfV0VCSE9PS19VUkx9JHtkaXNjb3JkVGhyZWFkSWQgPyBgJnRocmVhZF9pZD0ke2Rpc2NvcmRUaHJlYWRJZH1gIDogIiJ9YDsKICAgIGNvbnN0IHJlcyA9IFVybEZldGNoQXBwLmZldGNoKHVybCwgewogICAgICBtZXRob2Q6ICJwb3N0IiwKICAgICAgaGVhZGVyczogeyAiQ29udGVudC1UeXBlIjogImFwcGxpY2F0aW9uL2pzb24iIH0sCiAgICAgIHBheWxvYWQ6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLAogICAgICBtdXRlSHR0cEV4Y2VwdGlvbnM6IHRydWUKICAgIH0pOwogICAgY29uc3QgY29kZSA9IHJlcy5nZXRSZXNwb25zZUNvZGUoKTsKICAgIGNvbnN0IHRleHQgPSByZXMuZ2V0Q29udGVudFRleHQoKTsKICAgIGlmIChjb2RlIDwgMjAwIHx8IGNvZGUgPj0gMzAwKSB7CiAgICAgIGNvbnNvbGUud2FybihgRGlzY29yZCBIVFRQICR7Y29kZX06YCwgdGV4dCk7CiAgICB9CiAgICByZXR1cm4gdGV4dDsKICB9IGNhdGNoIChlKSB7CiAgICBjb25zb2xlLmVycm9yKCJFcnJvciBzZW5kaW5nIHRvIERpc2NvcmQ6IiwgZSk7CiAgICByZXR1cm4gInt9IjsKICB9Cn0KCi8qIC0tLS0tLS0tLS0gUHJvY2VzcyBhbGwgc2VjdGlvbnMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbnMoYWxsSXRlbXMsIHJlc3BvbnNlcykgewogIGxldCBzZWN0aW9uVGl0bGUgPSAiIjsKICBsZXQgc2VjdGlvbkl0ZW1zID0gW107CgogIGFsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7CiAgICBpZiAoaXRlbS5nZXRUeXBlKCkgPT09IEZvcm1BcHAuSXRlbVR5cGUuUEFHRV9CUkVBSykgewogICAgICBpZiAoc2VjdGlvblRpdGxlKSBzZW5kU2VjdGlvbihzZWN0aW9uVGl0bGUsIHNlY3Rpb25JdGVtcywgcmVzcG9uc2VzKTsKICAgICAgc2VjdGlvblRpdGxlID0gaXRlbS5nZXRUaXRsZSgpOwogICAgICBzZWN0aW9uSXRlbXMgPSBbXTsKICAgIH0gZWxzZSB7CiAgICAgIHNlY3Rpb25JdGVtcy5wdXNoKGl0ZW0pOwogICAgfQogIH0pOwoKICBpZiAoc2VjdGlvblRpdGxlKSBzZW5kU2VjdGlvbihzZWN0aW9uVGl0bGUsIHNlY3Rpb25JdGVtcywgcmVzcG9uc2VzKTsKfQoKLyogLS0tLS0tLS0tLSBTZW5kIGVhY2ggc2VjdGlvbiAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHNlbmRTZWN0aW9uKHRpdGxlLCBpdGVtcywgcmVzcG9uc2VzKSB7CiAgY29uc3QgZmllbGRzID0gY3JlYXRlRW1iZWRGaWVsZHMoaXRlbXMsIHJlc3BvbnNlcyk7CiAgaWYgKCFmaWVsZHMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5sb2coYFNraXBwZWQgZW1wdHkgc2VjdGlvbjogJHt0aXRsZX1gKTsKCiAgY29uc3QgcGF5bG9hZCA9IHsKICAgIGVtYmVkczogW3sKICAgICAgY29sb3I6IGdldE5leHRFbWJlZENvbG9yKCksCiAgICAgIHRpdGxlOiB0aXRsZSwKICAgICAgZmllbGRzOiBmaWVsZHMKICAgIH1dLAogICAgY29tcG9uZW50czogW10KICB9OwoKICBpZiAod2ViaG9va1N1cHBvcnRzRm9ydW0gJiYgQXJyYXkuaXNBcnJheShESVNDT1JEX0ZPUlVNX1RBR1MpICYmIERJU0NPUkRfRk9SVU1fVEFHUy5sZW5ndGgpIHsKICAgIHBheWxvYWQuYXBwbGllZF90YWdzID0gRElTQ09SRF9GT1JVTV9UQUdTOwogIH0KCiAgY29uc3QgcmVzcFRleHQgPSBzZW5kVG9EaXNjb3JkKHBheWxvYWQpOwogIGNvbnN0IGpzb24gPSB0cnlQYXJzZUpzb24ocmVzcFRleHQpOwoKICBpZiAoanNvbiAmJiBqc29uLmNvZGUpIHsKICAgIGNvbnNvbGUud2FybigiU2VjdGlvbiBlcnJvcjoiLCBqc29uKTsKICAgIGlmICghZm9ydW1EZXRlY3Rpb25Eb25lICYmIGluZGljYXRlc05vdEZvcnVtKGpzb24pKSB7CiAgICAgIHdlYmhvb2tTdXBwb3J0c0ZvcnVtID0gZmFsc2U7CiAgICAgIGZvcnVtRGV0ZWN0aW9uRG9uZSA9IHRydWU7CiAgICB9CiAgfQoKICBjb25zb2xlLmxvZyhgU2VudCBzZWN0aW9uOiAke3RpdGxlfWApOwp9CgovKiAtLS0tLS0tLS0tIFV0aWxpdHkgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiB0cnVuY2F0ZSh0ZXh0LCBtYXgsIHN1ZmZpeCA9ICIuLi4iKSB7CiAgcmV0dXJuIHRleHQubGVuZ3RoID4gbWF4ID8gdGV4dC5zbGljZSgwLCBtYXggLSBzdWZmaXgubGVuZ3RoKSArIHN1ZmZpeCA6IHRleHQ7Cn0KCmZ1bmN0aW9uIGdldE5leHRFbWJlZENvbG9yKCkgewogIHJldHVybiBFTUJFRF9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRU1CRURfQ09MT1JTLmxlbmd0aCldOwp9Cg==";

function b64DecodeUnicode(b64) {
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

const CODE_GS_BODY = b64DecodeUnicode(CODE_GS_B64);

const DEFAULT_PALETTE = [
  "0x1abc9c", "0x2ecc71", "0x3498db", "0x9b59b6",
  "0xe91e63", "0xe67e22", "0xf1c40f", "0xe74c3c",
  "0x95a5a6", "0x34495e", "0x16a085", "0x27ae60",
  "0x2980b9", "0x8e44ad", "0xc0392b", "0xd35400",
  "0xf39c12", "0x7f8c8d", "0x2c3e50", "0xbdc3c7"
];

/* ---------- Helpers ---------- */
function jsStr(value) {
  return JSON.stringify(value == null ? "" : String(value));
}

function ensureWaitParam(rawUrl) {
  const url = (rawUrl || "").trim();
  if (!url) return "YOUR_WEBHOOK_URL?wait=true";
  if (/[?&]wait=true(?:&|$)/.test(url)) return url;
  return url + (url.includes("?") ? "&wait=true" : "?wait=true");
}

function hexToLiteral(hex) {
  const clean = (hex || "#5865f2").replace("#", "").toLowerCase();
  return "0x" + clean;
}

/* ---------- Removable-row lists (forum tags / custom colors) ---------- */
function createRemovableRow(list, buildInput) {
  const row = document.createElement("div");
  row.className = "tag-row";

  const input = buildInput();
  input.addEventListener("input", update);
  input.addEventListener("change", update);

  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-outline btn-icon";
  removeBtn.type = "button";
  removeBtn.setAttribute("aria-label", "Remove");
  removeBtn.setAttribute("data-tooltip", "Remove");
  removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  removeBtn.addEventListener("click", () => {
    row.remove();
    update();
  });

  row.appendChild(input);
  row.appendChild(removeBtn);
  list.appendChild(row);
  return input;
}

/* ---------- Tag list ---------- */
const tagList = document.getElementById("tagList");
const addTagBtn = document.getElementById("addTagBtn");

function addTagRow(value) {
  createRemovableRow(tagList, () => {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "text";
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.placeholder = "e.g. 1234567890123456789";
    input.value = value || "";
    input.addEventListener("beforeinput", (e) => {
      if (e.data && /\D/.test(e.data)) e.preventDefault();
    });
    input.addEventListener("input", () => {
      const digitsOnly = input.value.replace(/\D/g, "");
      if (digitsOnly !== input.value) input.value = digitsOnly;
    });
    return input;
  });
}

addTagBtn.addEventListener("click", () => {
  addTagRow("");
  update();
});

function getTagIds() {
  return Array.from(tagList.querySelectorAll("input"))
    .map((el) => el.value.trim())
    .filter(Boolean);
}

/* ---------- Custom color pool ---------- */
const colorList = document.getElementById("colorList");
const addColorBtn = document.getElementById("addColorBtn");

function addColorRow(value) {
  createRemovableRow(colorList, () => {
    const input = document.createElement("input");
    input.className = "color-input";
    input.type = "color";
    input.value = value || "#5865f2";
    return input;
  });
}

addColorBtn.addEventListener("click", () => {
  addColorRow("");
  update();
});

function getCustomColors() {
  return Array.from(colorList.querySelectorAll("input")).map((el) => hexToLiteral(el.value));
}

/* ---------- Field refs ---------- */
const els = {
  webhookUrl: document.getElementById("webhookUrl"),
  usernameQuestionNumber: document.getElementById("usernameQuestionNumber"),
  userIdQuestionNumber: document.getElementById("userIdQuestionNumber"),
  threadNamePosition: document.getElementById("threadNamePosition"),
  threadNameStaticText: document.getElementById("threadNameStaticText"),
  submissionMessageContent: document.getElementById("submissionMessageContent"),
  noAnswerMessage: document.getElementById("noAnswerMessage"),
  skipEmptyResponses: document.getElementById("skipEmptyResponses"),
  embedFieldValuePrefix: document.getElementById("embedFieldValuePrefix"),
  embedDescriptionTemplate: document.getElementById("embedDescriptionTemplate"),
  colorMode: document.getElementById("colorMode"),
  singleColor: document.getElementById("singleColor")
};

const singleColorField = document.getElementById("singleColorField");
const randomColorsField = document.getElementById("randomColorsField");

els.colorMode.addEventListener("change", () => {
  const isSingle = els.colorMode.value === "single";
  singleColorField.style.display = isSingle ? "" : "none";
  randomColorsField.style.display = isSingle ? "none" : "";
  update();
});

Object.values(els).forEach((el) => {
  el.addEventListener("input", update);
  el.addEventListener("change", update);
});

/* ---------- Generation ---------- */
function generateConfigBlock() {
  const webhook = ensureWaitParam(els.webhookUrl.value);
  const tagIds = getTagIds();
  const tagsLiteral = tagIds.length
    ? "[\n" + tagIds.map((id) => "    " + jsStr(id)).join(",\n") + "\n]"
    : "[]";

  const threadPos = els.threadNamePosition.value === "none" ? "null" : jsStr(els.threadNamePosition.value);
  const skipEmpty = els.skipEmptyResponses.value === "true" ? "true" : "false";

  let colorsLiteral;
  if (els.colorMode.value === "single") {
    colorsLiteral = "[" + hexToLiteral(els.singleColor.value) + "]";
  } else {
    const customColors = getCustomColors();
    const palette = customColors.length ? customColors : DEFAULT_PALETTE;
    colorsLiteral = "[\n  " + palette.join(", ").replace(/(.{1,60},) /g, "$1\n  ") + "\n]";
  }

  return `/**************************************************
  Google Form Response To Discord
  Generated by the Config Builder UI
**************************************************/

/* ---------- Configurations --------- */

// Webhook URL for sending messages to a Discord forum channel (Do not delete or replace "?wait=true")
const DISCORD_WEBHOOK_URL = ${jsStr(webhook)};

// Position of the question in the Google Form where applicants provide their Discord user ID
const userIdQuestionNumber = ${Number(els.userIdQuestionNumber.value) || 1};

// Position of the question in the Google Form where applicants provide their Discord username
const usernameQuestionNumber = ${Number(els.usernameQuestionNumber.value) || 1};

// Static text used to build the forum thread's title (combined with the submitter's username)
const threadNameStaticText = ${jsStr(els.threadNameStaticText.value)};

// Where the username sits relative to threadNameStaticText: "start" for prefix, "end" for suffix, or null to disable
const threadNamePosition = ${threadPos};

// Tag IDs to apply when creating a forum post (leave empty array if not using forum tags)
const DISCORD_FORUM_TAGS = ${tagsLiteral};

// Message content sent above the embed, mentioning the applicant
// Available placeholders:
// - {discordUserID}: Discord user ID of the applicant
const submissionMessageContent = ${jsStr(els.submissionMessageContent.value)};

// Template for the main embed's description (top of the box).
// Available placeholders:
// - {formTitle}: Title of the Google Form
const embedDescriptionTemplate = ${jsStr(els.embedDescriptionTemplate.value)};

// Embed colors (hex). One color picked at random per embed/section.
const EMBED_COLORS = ${colorsLiteral};

// Text prepended to each answer's value inside the embed.
const embedFieldValuePrefix = ${jsStr(els.embedFieldValuePrefix.value)};

// A default message for questions that have no response
const noAnswerMessage = ${jsStr(els.noAnswerMessage.value)};

// Set to true to skip empty answers, false to include them
const skipEmptyResponses = ${skipEmpty};`;
}

function generateFullFile() {
  return generateConfigBlock() + "\n\n" + CODE_GS_BODY;
}

/* ---------- Syntax highlighting ---------- */
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TOKEN_REGEX = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?\b)|(\b(?:const|let|var|function|return|if|else|switch|case|default|break|continue|for|while|do|new|throw|try|catch|finally|typeof|instanceof|in|of|true|false|null|undefined|this)\b)/g;

function highlight(code) {
  let result = "";
  let lastIndex = 0;
  let match;
  TOKEN_REGEX.lastIndex = 0;
  while ((match = TOKEN_REGEX.exec(code)) !== null) {
    if (match.index > lastIndex) {
      result += escapeHtml(code.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      result += `<span class="tok-comment">${escapeHtml(match[1])}</span>`;
    } else if (match[2] !== undefined) {
      result += `<span class="tok-string">${escapeHtml(match[2])}</span>`;
    } else if (match[3] !== undefined) {
      result += `<span class="tok-number">${escapeHtml(match[3])}</span>`;
    } else if (match[4] !== undefined) {
      result += `<span class="tok-keyword">${escapeHtml(match[4])}</span>`;
    }
    lastIndex = TOKEN_REGEX.lastIndex;
  }
  result += escapeHtml(code.slice(lastIndex));
  return result;
}

/* ---------- Update loop ---------- */
const codeOutput = document.getElementById("codeOutput");

function update() {
  const fullText = generateFullFile();
  codeOutput.innerHTML = highlight(fullText);
  codeOutput.dataset.raw = fullText;
}

/* ---------- Copy / Download ---------- */
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = codeOutput.dataset.raw || "";
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("Copied to clipboard");
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const text = codeOutput.dataset.raw || "";
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Code.gs";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloaded Code.gs");
});

/* ---------- Theme toggle ---------- */
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
if (storedTheme) root.setAttribute("data-theme", storedTheme);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ---------- Mobile tabs ---------- */
const layout = document.getElementById("layout");
const tabForm = document.getElementById("tab-form");
const tabCode = document.getElementById("tab-code");

function setTab(tab) {
  layout.setAttribute("data-tab", tab);
  tabForm.setAttribute("aria-selected", String(tab === "form"));
  tabCode.setAttribute("aria-selected", String(tab === "code"));
}

tabForm.addEventListener("click", () => setTab("form"));
tabCode.addEventListener("click", () => setTab("code"));

/* ---------- GitHub star count ---------- */
function formatStarCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

async function loadGithubStars() {
  const starEl = document.getElementById("ghStarCount");
  const cacheKey = "ghStars:mouryaabhay/Google-Form-Response-To-Discord";
  const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
  const oneHour = 60 * 60 * 1000;

  if (cached && Date.now() - cached.time < oneHour) {
    starEl.textContent = formatStarCount(cached.count);
    return;
  }

  try {
    const res = await fetch("https://api.github.com/repos/mouryaabhay/Google-Form-Response-To-Discord");
    if (!res.ok) return;
    const data = await res.json();
    if (typeof data.stargazers_count !== "number") return;
    starEl.textContent = formatStarCount(data.stargazers_count);
    localStorage.setItem(cacheKey, JSON.stringify({ count: data.stargazers_count, time: Date.now() }));
  } catch (e) {
    /* offline or rate-limited — icon still links to GitHub without a count */
  }
}

loadGithubStars();

/* ---------- Init ---------- */
update();
