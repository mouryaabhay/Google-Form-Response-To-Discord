/* ==========================================================
   Google Form -> Discord Config Builder
   Generates a single Code.gs file from the form on the left.
   The logic half of the output is embedded below (base64) and
   must be kept in sync with apps-script/Code.gs by hand whenever
   that file changes. Do not hand-edit CODE_GS_B64 directly — it
   is long enough that manual edits reliably introduce silent
   corruption. See CONTRIBUTING.md for the regenerate/verify steps.
   ========================================================== */

const CODE_GS_B64 = "LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCiAgICBHb29nbGUgRm9ybSBSZXNwb25zZSBUbyBEaXNjb3JkCiAgICBBdXRvIEZvcnVtIC8gTm9ybWFsIENoYW5uZWwgRGV0ZWN0aW9uIFZlcnNpb24KICAgIEF1dGhvcjogTW91cnlhIEFiaGF5IEFtYXJqZWV0IChEeW5hc3RpYyBDcmVhdG9yKQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8KCmxldCBkaXNjb3JkVGhyZWFkSWQgPSAiIjsKbGV0IGRpc2NvcmRUaHJlYWROYW1lID0gIiI7CmxldCB3ZWJob29rU3VwcG9ydHNGb3J1bSA9IHRydWU7CmxldCBmb3J1bURldGVjdGlvbkRvbmUgPSBmYWxzZTsKCi8qIC0tLS0tLS0tLS0gRGlzY29yZCBMaW1pdHMgLS0tLS0tLS0tLSAqLwpjb25zdCBESVNDT1JEX0xJTUlUUyA9IHsKICBUSFJFQURfTkFNRTogMTAwLAogIERFU0NSSVBUSU9OOiA0MDk2LAogIEZJRUxEX05BTUU6IDI1NiwKICBGSUVMRF9WQUxVRTogMTAyNAp9OwoKLyogLS0tLS0tLS0tLSBSZXF1ZXN0IHBhY2luZyAtLS0tLS0tLS0tCiAgIEZvcm1zIHdpdGggc2V2ZXJhbCBzZWN0aW9ucyBzZW5kIHNldmVyYWwgd2ViaG9vayByZXF1ZXN0cyBiYWNrLXRvLWJhY2suCiAgIEZpcmluZyB0aGVtIHdpdGggbm8gZ2FwIHJlbGlhYmx5IHRyaXBzIENsb3VkZmxhcmUncyBlZGdlIHJhdGUgbGltaXQKICAgKEhUVFAgNDI5LCAiZXJyb3IgY29kZTogMTAxNSIpIGluIGZyb250IG9mIERpc2NvcmQsIGV2ZW4gdGhvdWdoIGVhY2gKICAgcmVxdWVzdCBpbmRpdmlkdWFsbHkgaXMgd2VsbCB1bmRlciBEaXNjb3JkJ3Mgb3duIHdlYmhvb2sgcmF0ZSBsaW1pdC4gKi8KY29uc3QgTUlOX1JFUVVFU1RfSU5URVJWQUxfTVMgPSByZXNvbHZlUmVxdWVzdEludGVydmFsTXMoKTsKY29uc3QgTUFYX1JFVFJJRVMgPSAzOwpsZXQgbGFzdERpc2NvcmRSZXF1ZXN0VGltZSA9IDA7CgpmdW5jdGlvbiByZXNvbHZlUmVxdWVzdEludGVydmFsTXMoKSB7CiAgaWYgKHR5cGVvZiByZXF1ZXN0SW50ZXJ2YWxNcyA9PT0gIm51bWJlciIgJiYgaXNGaW5pdGUocmVxdWVzdEludGVydmFsTXMpICYmIHJlcXVlc3RJbnRlcnZhbE1zID49IDApIHsKICAgIHJldHVybiBNYXRoLmZsb29yKHJlcXVlc3RJbnRlcnZhbE1zKTsKICB9CiAgcmV0dXJuIDIwMDA7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBNQUlOIFNVQk1JU1NJT04gSEFORExFUgogICBEZWNsYXJlZCBmaXJzdCBzbyBpdCdzIHRoZSBkZWZhdWx0IHBpY2sgaW4gdGhlIEFwcHMgU2NyaXB0IGVkaXRvcidzCiAgICJTZWxlY3QgZnVuY3Rpb24iIGRyb3Bkb3duICh1c2VkIGZvciBib3RoIG1hbnVhbCB0ZXN0IHJ1bnMgYW5kCiAgIHRyaWdnZXIgc2V0dXApIOKAlCBvdGhlcndpc2UgYSBoZWxwZXIgZnVuY3Rpb24gZW5kcyB1cCBzZWxlY3RlZCBieQogICBkZWZhdWx0IGFuZCB0ZXN0aW5nIHNpbGVudGx5IGRvZXMgbm90aGluZy4KICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7CiAgaWYgKCFESVNDT1JEX1dFQkhPT0tfVVJMIHx8IERJU0NPUkRfV0VCSE9PS19VUkwuc3RhcnRzV2l0aCgiWU9VUl9XRUJIT09LX1VSTCIpKSB7CiAgICB0aHJvdyBuZXcgRXJyb3IoIkRJU0NPUkRfV0VCSE9PS19VUkwgaXMgbm90IGNvbmZpZ3VyZWQuIFVwZGF0ZSBDb25maWcuZ3MgYmVmb3JlIHJ1bm5pbmcuIik7CiAgfQoKICBjb25zdCBmb3JtID0gRm9ybUFwcC5nZXRBY3RpdmVGb3JtKCk7CiAgY29uc3QgbGF0ZXN0UmVzcG9uc2UgPSBmb3JtLmdldFJlc3BvbnNlcygpLnBvcCgpOwogIGNvbnN0IGFsbEl0ZW1zID0gZm9ybS5nZXRJdGVtcygpOyAgLy8gRlVMTCBxdWVzdGlvbiBsaXN0CgogIGNvbnN0IHJlc3BvbnNlcyA9IG1hcFJlc3BvbnNlcyhsYXRlc3RSZXNwb25zZSk7CgogIGNvbnN0IGRpc2NvcmRNZXNzYWdlQ29udGVudCA9IGNyZWF0ZURpc2NvcmRNZXNzYWdlQ29udGVudChyZXNwb25zZXMsIGFsbEl0ZW1zKTsKICBkaXNjb3JkVGhyZWFkTmFtZSA9IGNyZWF0ZVRocmVhZE5hbWUocmVzcG9uc2VzLCBhbGxJdGVtcyk7CgogIGNvbnN0IGZpcnN0UGFnZVF1ZXN0aW9ucyA9IGdldEZpcnN0UGFnZVF1ZXN0aW9ucyhmb3JtKTsKICBjb25zdCBtYWluRW1iZWRGaWVsZHMgPSBjcmVhdGVFbWJlZEZpZWxkcyhmaXJzdFBhZ2VRdWVzdGlvbnMsIHJlc3BvbnNlcyk7CgogIHNlbmRFbWJlZFRvRGlzY29yZFdpdGhGYWxsYmFjayhtYWluRW1iZWRGaWVsZHMsIGRpc2NvcmRNZXNzYWdlQ29udGVudCk7CgogIHByb2Nlc3NTZWN0aW9ucyhhbGxJdGVtcywgcmVzcG9uc2VzKTsKfQoKLyogLS0tLS0tLS0tLSBNYXAgYWxsIHJlc3BvbnNlcyAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIG1hcFJlc3BvbnNlcyhsYXRlc3RSZXNwb25zZSkgewogIHJldHVybiBuZXcgTWFwKAogICAgbGF0ZXN0UmVzcG9uc2UuZ2V0SXRlbVJlc3BvbnNlcygpLm1hcChpdGVtID0+IFsKICAgICAgaXRlbS5nZXRJdGVtKCkuZ2V0VGl0bGUoKSwKICAgICAgaXRlbS5nZXRSZXNwb25zZSgpCiAgICBdKQogICk7Cn0KCi8qIC0tLS0tLS0tLS0gSGVscGVyOiBHZXQgcXVlc3Rpb24gYnkgaW5kZXggaW4gRlVMTCBMSVNUIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gZ2V0UXVlc3Rpb25CeUluZGV4KGFsbEl0ZW1zLCBpbmRleCkgewogIGNvbnN0IGl0ZW0gPSBhbGxJdGVtc1tpbmRleCAtIDFdOwogIHJldHVybiBpdGVtID8gaXRlbS5nZXRUaXRsZSgpIDogbnVsbDsKfQoKLyogLS0tLS0tLS0tLSBNZXNzYWdlIGNvbnRlbnQgdy8gVXNlciBJRCAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGNyZWF0ZURpc2NvcmRNZXNzYWdlQ29udGVudChyZXNwb25zZXMsIGFsbEl0ZW1zKSB7CiAgY29uc3QgdXNlcklkVGl0bGUgPSBnZXRRdWVzdGlvbkJ5SW5kZXgoYWxsSXRlbXMsIHVzZXJJZFF1ZXN0aW9uTnVtYmVyKTsKICBjb25zdCB1c2VySUQgPSByZXNwb25zZXMuZ2V0KHVzZXJJZFRpdGxlKSB8fCAiIjsKCiAgY29uc29sZS5sb2coYERpc2NvcmQgVXNlciBJRDogJHt1c2VySUR9YCk7CiAgcmV0dXJuIHN1Ym1pc3Npb25NZXNzYWdlQ29udGVudC5yZXBsYWNlKCJ7ZGlzY29yZFVzZXJJRH0iLCB1c2VySUQpOwp9CgovKiAtLS0tLS0tLS0tIFRocmVhZCBOYW1lIEJ1aWxkZXIgKEdMT0JBTCBsb29rdXApIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gY3JlYXRlVGhyZWFkTmFtZShyZXNwb25zZXMsIGFsbEl0ZW1zKSB7CiAgY29uc3QgdXNlcm5hbWVUaXRsZSA9IGdldFF1ZXN0aW9uQnlJbmRleChhbGxJdGVtcywgdXNlcm5hbWVRdWVzdGlvbk51bWJlcik7CiAgY29uc3QgdXNlcm5hbWUgPSByZXNwb25zZXMuZ2V0KHVzZXJuYW1lVGl0bGUpIHx8ICIiOwoKICBjb25zb2xlLmxvZyhgRGlzY29yZCBVc2VybmFtZTogJHt1c2VybmFtZX1gKTsKCiAgaWYgKCF0aHJlYWROYW1lUG9zaXRpb24pIHJldHVybiAiIjsKCiAgbGV0IG5hbWU7CiAgc3dpdGNoICh0aHJlYWROYW1lUG9zaXRpb24pIHsKICAgIGNhc2UgInN0YXJ0IjogbmFtZSA9IGAke3VzZXJuYW1lfSR7dGhyZWFkTmFtZVN0YXRpY1RleHR9YDsgYnJlYWs7CiAgICBjYXNlICJlbmQiOiBuYW1lID0gYCR7dGhyZWFkTmFtZVN0YXRpY1RleHR9JHt1c2VybmFtZX1gOyBicmVhazsKICAgIGRlZmF1bHQ6IG5hbWUgPSB0aHJlYWROYW1lU3RhdGljVGV4dDsKICB9CiAgcmV0dXJuIHRydW5jYXRlKG5hbWUsIERJU0NPUkRfTElNSVRTLlRIUkVBRF9OQU1FKTsKfQoKLyogLS0tLS0tLS0tLSBHZXQgZmlyc3QgcGFnZSBxdWVzdGlvbnMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBnZXRGaXJzdFBhZ2VRdWVzdGlvbnMoZm9ybSkgewogIGNvbnN0IGl0ZW1zID0gZm9ybS5nZXRJdGVtcygpOwogIGNvbnN0IGlkeCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkuZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLlBBR0VfQlJFQUspOwogIHJldHVybiBpdGVtcy5zbGljZSgwLCBpZHggIT09IC0xID8gaWR4IDogdW5kZWZpbmVkKTsKfQoKLyogLS0tLS0tLS0tLSBFbWJlZCBGaWVsZCBCdWlsZGVyIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gY3JlYXRlRW1iZWRGaWVsZHMoaXRlbXMsIHJlc3BvbnNlcykgewogIHJldHVybiBpdGVtcy5yZWR1Y2UoKGZpZWxkcywgcXVlc3Rpb24pID0+IHsKICAgIGxldCByZXNwb25zZSA9IGZvcm1hdFJlc3BvbnNlKHF1ZXN0aW9uLCByZXNwb25zZXMpOwoKICAgIGlmICghcmVzcG9uc2UgfHwgKHNraXBFbXB0eVJlc3BvbnNlcyAmJiByZXNwb25zZSA9PT0gbm9BbnN3ZXJNZXNzYWdlKSkgcmV0dXJuIGZpZWxkczsKCiAgICBmaWVsZHMucHVzaCh7CiAgICAgIG5hbWU6IHRydW5jYXRlKHF1ZXN0aW9uLmdldFRpdGxlKCksIERJU0NPUkRfTElNSVRTLkZJRUxEX05BTUUpLAogICAgICB2YWx1ZTogdHJ1bmNhdGUoYCR7ZW1iZWRGaWVsZFZhbHVlUHJlZml4fSR7cmVzcG9uc2V9YCwgRElTQ09SRF9MSU1JVFMuRklFTERfVkFMVUUpLAogICAgICBpbmxpbmU6IGZhbHNlCiAgICB9KTsKCiAgICByZXR1cm4gZmllbGRzOwogIH0sIFtdKTsKfQoKLyogLS0tLS0tLS0tLSBGb3JtYXQgcmVzcG9uc2VzIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gZm9ybWF0UmVzcG9uc2UocXVlc3Rpb24sIHJlc3BvbnNlcykgewogIGxldCByZXNwb25zZSA9IHJlc3BvbnNlcy5nZXQocXVlc3Rpb24uZ2V0VGl0bGUoKSkgfHwgbm9BbnN3ZXJNZXNzYWdlOwoKICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLkZJTEVfVVBMT0FEKSByZXR1cm4gZm9ybWF0RmlsZVJlc3BvbnNlKHJlc3BvbnNlKTsKICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLlRJTUUpIHJldHVybiBmb3JtYXRUaW1lKHJlc3BvbnNlKTsKICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gZm9ybWF0RGF0ZVRpbWUocmVzcG9uc2UpOwoKICByZXNwb25zZSA9IFN0cmluZyhyZXNwb25zZSkKICAgIC5yZXBsYWNlKC8sKFxTKS9nLCAiLCAkMSIpCiAgICAucmVwbGFjZSgvXG57Mix9L2csICJcbiIpOwoKICByZXR1cm4gcmVzcG9uc2U7Cn0KCmZ1bmN0aW9uIGZvcm1hdEZpbGVSZXNwb25zZShyZXNwb25zZSkgewogIGlmICghQXJyYXkuaXNBcnJheShyZXNwb25zZSkgfHwgcmVzcG9uc2UubGVuZ3RoID09PSAwKSByZXR1cm4gbm9BbnN3ZXJNZXNzYWdlOwogIHJldHVybiByZXNwb25zZS5tYXAoZiA9PgogICAgL15odHRwcz86XC9cLy8udGVzdChmKSA/IGYgOiBgPGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9pZD0ke2Z9PmAKICApLmpvaW4oIlxuIik7Cn0KCmZ1bmN0aW9uIGZvcm1hdFRpbWUodCkgewogIGNvbnN0IFtoLCBtXSA9IHQuc3BsaXQoIjoiKS5tYXAoTnVtYmVyKTsKICBjb25zdCBhbXBtID0gaCA+PSAxMiA/ICJQTSIgOiAiQU0iOwogIGNvbnN0IGgxMiA9IGggJSAxMiB8fCAxMjsKICByZXR1cm4gYCR7aDEyfToke20udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAiMCIpfSAke2FtcG19YDsKfQoKZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZGF0ZSkgewogIGNvbnN0IHVuaXggPSBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7CiAgcmV0dXJuIGA8dDoke3VuaXh9OmY+YDsKfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIFNFTkQgRklSU1QgRU1CRUQgKEZPUlVNIERFVEVDVElPTikKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmZ1bmN0aW9uIHNlbmRFbWJlZFRvRGlzY29yZFdpdGhGYWxsYmFjayhlbWJlZEZpZWxkcywgZGlzY29yZE1lc3NhZ2VDb250ZW50KSB7CiAgY29uc3QgZm9ybVRpdGxlID0gRm9ybUFwcC5nZXRBY3RpdmVGb3JtKCkuZ2V0VGl0bGUoKTsKCiAgY29uc3QgZm9ydW1QYXlsb2FkID0gewogICAgY29udGVudDogZGlzY29yZE1lc3NhZ2VDb250ZW50LAogICAgZW1iZWRzOiBbewogICAgICBjb2xvcjogZ2V0TmV4dEVtYmVkQ29sb3IoKSwKICAgICAgZGVzY3JpcHRpb246IHRydW5jYXRlKGVtYmVkRGVzY3JpcHRpb25UZW1wbGF0ZS5yZXBsYWNlKCJ7Zm9ybVRpdGxlfSIsIGZvcm1UaXRsZSksIERJU0NPUkRfTElNSVRTLkRFU0NSSVBUSU9OKSwKICAgICAgZmllbGRzOiBlbWJlZEZpZWxkcwogICAgfV0sCiAgICBjb21wb25lbnRzOiBbXQogIH07CgogIGlmIChBcnJheS5pc0FycmF5KERJU0NPUkRfRk9SVU1fVEFHUykgJiYgRElTQ09SRF9GT1JVTV9UQUdTLmxlbmd0aCAmJiB3ZWJob29rU3VwcG9ydHNGb3J1bSkgewogICAgZm9ydW1QYXlsb2FkLmFwcGxpZWRfdGFncyA9IERJU0NPUkRfRk9SVU1fVEFHUzsKICB9CiAgaWYgKHdlYmhvb2tTdXBwb3J0c0ZvcnVtICYmICFkaXNjb3JkVGhyZWFkSWQgJiYgZGlzY29yZFRocmVhZE5hbWUgJiYgZGlzY29yZFRocmVhZE5hbWUudHJpbSgpICE9PSAiIikgewogICAgZm9ydW1QYXlsb2FkLnRocmVhZF9uYW1lID0gZGlzY29yZFRocmVhZE5hbWU7CiAgfQoKICBpZiAoIXdlYmhvb2tTdXBwb3J0c0ZvcnVtICYmIGZvcnVtRGV0ZWN0aW9uRG9uZSkgewogICAgY29uc3Qgbm9ybWFsUGF5bG9hZCA9IHsKICAgICAgY29udGVudDogZGlzY29yZE1lc3NhZ2VDb250ZW50LAogICAgICBlbWJlZHM6IGZvcnVtUGF5bG9hZC5lbWJlZHMsCiAgICAgIGNvbXBvbmVudHM6IFtdCiAgICB9OwogICAgbG9nU2VuZFJlc3VsdChzZW5kVG9EaXNjb3JkKG5vcm1hbFBheWxvYWQpLCAibm9ybWFsIChrbm93bikiKTsKICAgIHJldHVybjsKICB9CgogIGNvbnN0IGZpcnN0UmVzdWx0ID0gc2VuZFRvRGlzY29yZChmb3J1bVBheWxvYWQpOwogIGNvbnN0IGZpcnN0SnNvbiA9IHRyeVBhcnNlSnNvbihmaXJzdFJlc3VsdC50ZXh0KTsKCiAgaWYgKGluZGljYXRlc05vdEZvcnVtKGZpcnN0SnNvbikpIHsKICAgIHdlYmhvb2tTdXBwb3J0c0ZvcnVtID0gZmFsc2U7CiAgICBmb3J1bURldGVjdGlvbkRvbmUgPSB0cnVlOwogICAgY29uc29sZS53YXJuKCLimqDvuI8gTm90IGEgZm9ydW0uIFN3aXRjaGluZyB0byBOT1JNQUwgTU9ERS4iKTsKCiAgICBjb25zdCBub3JtYWxQYXlsb2FkID0gewogICAgICBjb250ZW50OiBkaXNjb3JkTWVzc2FnZUNvbnRlbnQsCiAgICAgIGVtYmVkczogZm9ydW1QYXlsb2FkLmVtYmVkcywKICAgICAgY29tcG9uZW50czogW10KICAgIH07CiAgICBsb2dTZW5kUmVzdWx0KHNlbmRUb0Rpc2NvcmQobm9ybWFsUGF5bG9hZCksICJub3JtYWwgKHJlc2VuZCkiKTsKICAgIHJldHVybjsKICB9CgogIGlmIChmaXJzdEpzb24gJiYgZmlyc3RKc29uLmNoYW5uZWxfaWQpIHsKICAgIGRpc2NvcmRUaHJlYWRJZCA9IGZpcnN0SnNvbi5jaGFubmVsX2lkOwogIH0gZWxzZSBpZiAoZmlyc3RKc29uICYmIGZpcnN0SnNvbi5pZCAmJiAhZGlzY29yZFRocmVhZElkKSB7CiAgICBkaXNjb3JkVGhyZWFkSWQgPSBmaXJzdEpzb24uaWQ7CiAgfQoKICBmb3J1bURldGVjdGlvbkRvbmUgPSB0cnVlOwogIGxvZ1NlbmRSZXN1bHQoZmlyc3RSZXN1bHQsICJmb3J1bSAoZmlyc3Qgc2VuZCkiKTsKfQoKLyogLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gdHJ5UGFyc2VKc29uKHRleHQpIHsKICB0cnkgeyByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gbnVsbDsgfQp9CgpmdW5jdGlvbiBpbmRpY2F0ZXNOb3RGb3J1bShqc29uKSB7CiAgaWYgKCFqc29uKSByZXR1cm4gZmFsc2U7CiAgY29uc3QgZXJyQ29kZSA9IGpzb24uY29kZTsKICBpZiAoZXJyQ29kZSA9PT0gMjIwMDAzIHx8IGVyckNvZGUgPT09IDIyMDAwMSkgcmV0dXJuIHRydWU7CiAgaWYgKGpzb24ubWVzc2FnZSAmJiAvZm9ydW18dGhyZWFkX25hbWV8YXBwbGllZF90YWdzL2kudGVzdChqc29uLm1lc3NhZ2UpKSByZXR1cm4gdHJ1ZTsKICByZXR1cm4gZmFsc2U7Cn0KCmZ1bmN0aW9uIGxvZ1NlbmRSZXN1bHQocmVzdWx0LCB0YWcpIHsKICBpZiAocmVzdWx0LmNvZGUgPj0gMjAwICYmIHJlc3VsdC5jb2RlIDwgMzAwKSB7CiAgICBjb25zb2xlLmxvZyhgU2VudCAoJHt0YWd9KWApOwogIH0gZWxzZSB7CiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBzZW5kICgke3RhZ30pOiBIVFRQICR7cmVzdWx0LmNvZGV9YCwgcmVzdWx0LnRleHQpOwogIH0KfQoKLyogLS0tLS0tLS0tLSBTZW5kZXIgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBzZW5kVG9EaXNjb3JkKHBheWxvYWQpIHsKICBsZXQgcmVzdWx0ID0gZG9TZW5kVG9EaXNjb3JkKHBheWxvYWQpOwoKICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSBNQVhfUkVUUklFUyAmJiByZXN1bHQuY29kZSA9PT0gNDI5OyBhdHRlbXB0KyspIHsKICAgIGNvbnN0IHdhaXRNcyA9IGdldFJldHJ5QWZ0ZXJNcyhyZXN1bHQudGV4dCkgfHwgMTAwMCAqIGF0dGVtcHQgKiAyOwogICAgY29uc29sZS53YXJuKGBSYXRlIGxpbWl0ZWQsIHJldHJ5aW5nIGluICR7d2FpdE1zfW1zIChhdHRlbXB0ICR7YXR0ZW1wdH0vJHtNQVhfUkVUUklFU30pYCk7CiAgICBVdGlsaXRpZXMuc2xlZXAod2FpdE1zKTsKICAgIHJlc3VsdCA9IGRvU2VuZFRvRGlzY29yZChwYXlsb2FkKTsKICB9CgogIHJldHVybiByZXN1bHQ7Cn0KCmZ1bmN0aW9uIGRvU2VuZFRvRGlzY29yZChwYXlsb2FkKSB7CiAgdGhyb3R0bGVEaXNjb3JkUmVxdWVzdCgpOwogIHRyeSB7CiAgICBjb25zdCB1cmwgPSBgJHtESVNDT1JEX1dFQkhPT0tfVVJMfSR7ZGlzY29yZFRocmVhZElkID8gYCZ0aHJlYWRfaWQ9JHtkaXNjb3JkVGhyZWFkSWR9YCA6ICIifWA7CiAgICBjb25zdCByZXMgPSBVcmxGZXRjaEFwcC5mZXRjaCh1cmwsIHsKICAgICAgbWV0aG9kOiAicG9zdCIsCiAgICAgIGhlYWRlcnM6IHsgIkNvbnRlbnQtVHlwZSI6ICJhcHBsaWNhdGlvbi9qc29uIiB9LAogICAgICBwYXlsb2FkOiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSwKICAgICAgbXV0ZUh0dHBFeGNlcHRpb25zOiB0cnVlCiAgICB9KTsKICAgIGNvbnN0IGNvZGUgPSByZXMuZ2V0UmVzcG9uc2VDb2RlKCk7CiAgICBjb25zdCB0ZXh0ID0gcmVzLmdldENvbnRlbnRUZXh0KCk7CiAgICBpZiAoY29kZSA8IDIwMCB8fCBjb2RlID49IDMwMCkgewogICAgICBjb25zb2xlLndhcm4oYERpc2NvcmQgSFRUUCAke2NvZGV9OmAsIHRleHQpOwogICAgfQogICAgcmV0dXJuIHsgY29kZSwgdGV4dCB9OwogIH0gY2F0Y2ggKGUpIHsKICAgIGNvbnNvbGUuZXJyb3IoIkVycm9yIHNlbmRpbmcgdG8gRGlzY29yZDoiLCBlKTsKICAgIHJldHVybiB7IGNvZGU6IDAsIHRleHQ6ICJ7fSIgfTsKICB9IGZpbmFsbHkgewogICAgLy8gVHJhY2sgcmVxdWVzdCBjb21wbGV0aW9uIHRpbWUgc28gdGhlIG5leHQgc2VuZCBzdGFydHMgPj0gMXMgbGF0ZXIuCiAgICBsYXN0RGlzY29yZFJlcXVlc3RUaW1lID0gRGF0ZS5ub3coKTsKICB9Cn0KCmZ1bmN0aW9uIHRocm90dGxlRGlzY29yZFJlcXVlc3QoKSB7CiAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0RGlzY29yZFJlcXVlc3RUaW1lOwogIGlmIChsYXN0RGlzY29yZFJlcXVlc3RUaW1lICE9PSAwICYmIGVsYXBzZWQgPCBNSU5fUkVRVUVTVF9JTlRFUlZBTF9NUykgewogICAgVXRpbGl0aWVzLnNsZWVwKE1JTl9SRVFVRVNUX0lOVEVSVkFMX01TIC0gZWxhcHNlZCk7CiAgfQp9CgpmdW5jdGlvbiBnZXRSZXRyeUFmdGVyTXMocmVzcG9uc2VUZXh0KSB7CiAgY29uc3QganNvbiA9IHRyeVBhcnNlSnNvbihyZXNwb25zZVRleHQpOwogIGlmIChqc29uICYmIHR5cGVvZiBqc29uLnJldHJ5X2FmdGVyID09PSAibnVtYmVyIikgcmV0dXJuIE1hdGguY2VpbChqc29uLnJldHJ5X2FmdGVyICogMTAwMCkgKyAyMDA7CiAgcmV0dXJuIG51bGw7Cn0KCi8qIC0tLS0tLS0tLS0gUHJvY2VzcyBhbGwgc2VjdGlvbnMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbnMoYWxsSXRlbXMsIHJlc3BvbnNlcykgewogIGxldCBzZWN0aW9uVGl0bGUgPSAiIjsKICBsZXQgc2VjdGlvbkl0ZW1zID0gW107CgogIGFsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7CiAgICBpZiAoaXRlbS5nZXRUeXBlKCkgPT09IEZvcm1BcHAuSXRlbVR5cGUuUEFHRV9CUkVBSykgewogICAgICBpZiAoc2VjdGlvblRpdGxlKSBzZW5kU2VjdGlvbihzZWN0aW9uVGl0bGUsIHNlY3Rpb25JdGVtcywgcmVzcG9uc2VzKTsKICAgICAgc2VjdGlvblRpdGxlID0gaXRlbS5nZXRUaXRsZSgpOwogICAgICBzZWN0aW9uSXRlbXMgPSBbXTsKICAgIH0gZWxzZSB7CiAgICAgIHNlY3Rpb25JdGVtcy5wdXNoKGl0ZW0pOwogICAgfQogIH0pOwoKICBpZiAoc2VjdGlvblRpdGxlKSBzZW5kU2VjdGlvbihzZWN0aW9uVGl0bGUsIHNlY3Rpb25JdGVtcywgcmVzcG9uc2VzKTsKfQoKLyogLS0tLS0tLS0tLSBTZW5kIGVhY2ggc2VjdGlvbiAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHNlbmRTZWN0aW9uKHRpdGxlLCBpdGVtcywgcmVzcG9uc2VzKSB7CiAgY29uc3QgZmllbGRzID0gY3JlYXRlRW1iZWRGaWVsZHMoaXRlbXMsIHJlc3BvbnNlcyk7CiAgaWYgKCFmaWVsZHMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5sb2coYFNraXBwZWQgZW1wdHkgc2VjdGlvbjogJHt0aXRsZX1gKTsKCiAgY29uc3QgcGF5bG9hZCA9IHsKICAgIGVtYmVkczogW3sKICAgICAgY29sb3I6IGdldE5leHRFbWJlZENvbG9yKCksCiAgICAgIHRpdGxlOiB0aXRsZSwKICAgICAgZmllbGRzOiBmaWVsZHMKICAgIH1dLAogICAgY29tcG9uZW50czogW10KICB9OwoKICBpZiAod2ViaG9va1N1cHBvcnRzRm9ydW0gJiYgQXJyYXkuaXNBcnJheShESVNDT1JEX0ZPUlVNX1RBR1MpICYmIERJU0NPUkRfRk9SVU1fVEFHUy5sZW5ndGgpIHsKICAgIHBheWxvYWQuYXBwbGllZF90YWdzID0gRElTQ09SRF9GT1JVTV9UQUdTOwogIH0KCiAgY29uc3QgcmVzdWx0ID0gc2VuZFRvRGlzY29yZChwYXlsb2FkKTsKICBjb25zdCBqc29uID0gdHJ5UGFyc2VKc29uKHJlc3VsdC50ZXh0KTsKCiAgaWYgKGpzb24gJiYganNvbi5jb2RlKSB7CiAgICBjb25zb2xlLndhcm4oIlNlY3Rpb24gZXJyb3I6IiwganNvbik7CiAgICBpZiAoIWZvcnVtRGV0ZWN0aW9uRG9uZSAmJiBpbmRpY2F0ZXNOb3RGb3J1bShqc29uKSkgewogICAgICB3ZWJob29rU3VwcG9ydHNGb3J1bSA9IGZhbHNlOwogICAgICBmb3J1bURldGVjdGlvbkRvbmUgPSB0cnVlOwogICAgfQogIH0KCiAgbG9nU2VuZFJlc3VsdChyZXN1bHQsIGBzZWN0aW9uOiAke3RpdGxlfWApOwp9CgovKiAtLS0tLS0tLS0tIFV0aWxpdHkgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiB0cnVuY2F0ZSh0ZXh0LCBtYXgsIHN1ZmZpeCA9ICIuLi4iKSB7CiAgcmV0dXJuIHRleHQubGVuZ3RoID4gbWF4ID8gdGV4dC5zbGljZSgwLCBtYXggLSBzdWZmaXgubGVuZ3RoKSArIHN1ZmZpeCA6IHRleHQ7Cn0KCmZ1bmN0aW9uIGdldE5leHRFbWJlZENvbG9yKCkgewogIHJldHVybiBFTUJFRF9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRU1CRURfQ09MT1JTLmxlbmd0aCldOwp9Cg==";

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
const skipEmptyResponses = ${skipEmpty};

// Minimum gap (in milliseconds) between Discord webhook requests.
// Increase this if you still hit Cloudflare 1015 rate limits.
const requestIntervalMs = 2000;`;
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
const webhookHelper = document.getElementById("webhookHelper");
const webhookHelperDefault = webhookHelper.innerHTML;

function setWebhookWarning(showWarning) {
  const isEmpty = els.webhookUrl.value.trim() === "";
  const shouldShow = showWarning && isEmpty;
  els.webhookUrl.classList.toggle("input-warning", shouldShow);
  if (shouldShow) {
    webhookHelper.innerHTML = "⚠️ Required — the generated script will throw an error on every submission until this is filled in.";
    webhookHelper.classList.add("helper-warning");
  } else {
    webhookHelper.innerHTML = webhookHelperDefault;
    webhookHelper.classList.remove("helper-warning");
  }
}

function validateWebhookBeforeExport() {
  const isEmpty = els.webhookUrl.value.trim() === "";
  setWebhookWarning(isEmpty);
  return !isEmpty;
}

function update() {
  // Clear warning as soon as webhook URL is filled.
  if (els.webhookUrl.value.trim() !== "") {
    setWebhookWarning(false);
  }
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
  if (!validateWebhookBeforeExport()) {
    showToast("Webhook URL is required");
    return;
  }
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
  if (!validateWebhookBeforeExport()) {
    showToast("Webhook URL is required");
    return;
  }
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
