/* ==========================================================
   Google Form -> Discord Config Builder
   Generates a single Code.gs file from the form on the left.
   The logic half of the output is embedded below (base64) and
   kept in sync with the repo's root Code.gs.
   ========================================================== */

const CODE_GS_B64 = "LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCiAgICBHb29nbGUgRm9ybSBSZXNwb25zZSBUbyBEaXNjb3JkCiAgICBBdXRvIEZvcnVtIC8gTm9ybWFsIENoYW5uZWwgRGV0ZWN0aW9uIFZlcnNpb24KICAgIEF1dGhvcjogTW91cnlhIEFiaGF5IEFtYXJqZWV0IChEeW5hc3RpYyBDcmVhdG9yKQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8KCmxldCBkaXNjb3JkVGhyZWFkSWQgPSAiIjsKbGV0IGRpc2NvcmRUaHJlYWROYW1lID0gIiI7CmxldCB3ZWJob29rU3VwcG9ydHNGb3J1bSA9IHRydWU7CmxldCBmb3J1bURldGVjdGlvbkRvbmUgPSBmYWxzZTsKCi8qIC0tLS0tLS0tLS0gRGlzY29yZCBMaW1pdHMgLS0tLS0tLS0tLSAqLwpjb25zdCBESVNDT1JEX0xJTUlUUyA9IHsKICBUSFJFQURfTkFNRTogMTAwLAogIERFU0NSSVBUSU9OOiA0MDk2LAogIEZJRUxEX05BTUU6IDI1NiwKICBGSUVMRF9WQUxVRTogMTAyNAp9OwoKLyogLS0tLS0tLS0tLSBDb25maWcgVmFsaWRhdGlvbiAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKCkgewogIGlmICghRElTQ09SRF9XRUJIT09LX1VSTCB8fCBESVNDT1JEX1dFQkhPT0tfVVJMLnN0YXJ0c1dpdGgoIllPVVJfV0VCSE9PS19VUkwiKSkgewogICAgdGhyb3cgbmV3IEVycm9yKCJESVNDT1JEX1dFQkhPT0tfVVJMIGlzIG5vdCBjb25maWd1cmVkLiBVcGRhdGUgQ29uZmlnLmdzIGJlZm9yZSBydW5uaW5nLiIpOwogIH0KfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIE1BSU4gU1VCTUlTU0lPTiBIQU5ETEVSCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwpmdW5jdGlvbiBvblN1Ym1pdChldmVudCkgewogIHZhbGlkYXRlQ29uZmlnKCk7CiAgY29uc3QgZm9ybSA9IEZvcm1BcHAuZ2V0QWN0aXZlRm9ybSgpOwogIGNvbnN0IGxhdGVzdFJlc3BvbnNlID0gZm9ybS5nZXRSZXNwb25zZXMoKS5wb3AoKTsKICBjb25zdCBhbGxJdGVtcyA9IGZvcm0uZ2V0SXRlbXMoKTsgIC8vIEZVTEwgcXVlc3Rpb24gbGlzdAoKICBjb25zdCByZXNwb25zZXMgPSBtYXBSZXNwb25zZXMobGF0ZXN0UmVzcG9uc2UpOwoKICBjb25zdCBkaXNjb3JkTWVzc2FnZUNvbnRlbnQgPSBjcmVhdGVEaXNjb3JkTWVzc2FnZUNvbnRlbnQocmVzcG9uc2VzLCBhbGxJdGVtcyk7CiAgZGlzY29yZFRocmVhZE5hbWUgPSBjcmVhdGVUaHJlYWROYW1lKHJlc3BvbnNlcywgYWxsSXRlbXMpOwoKICBjb25zdCBmaXJzdFBhZ2VRdWVzdGlvbnMgPSBnZXRGaXJzdFBhZ2VRdWVzdGlvbnMoZm9ybSk7CiAgY29uc3QgbWFpbkVtYmVkRmllbGRzID0gY3JlYXRlRW1iZWRGaWVsZHMoZmlyc3RQYWdlUXVlc3Rpb25zLCByZXNwb25zZXMpOwoKICBzZW5kRW1iZWRUb0Rpc2NvcmRXaXRoRmFsbGJhY2sobWFpbkVtYmVkRmllbGRzLCBkaXNjb3JkTWVzc2FnZUNvbnRlbnQpOwoKICBwcm9jZXNzU2VjdGlvbnMoYWxsSXRlbXMsIHJlc3BvbnNlcyk7Cn0KCi8qIC0tLS0tLS0tLS0gTWFwIGFsbCByZXNwb25zZXMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBtYXBSZXNwb25zZXMobGF0ZXN0UmVzcG9uc2UpIHsKICByZXR1cm4gbmV3IE1hcCgKICAgIGxhdGVzdFJlc3BvbnNlLmdldEl0ZW1SZXNwb25zZXMoKS5tYXAoaXRlbSA9PiBbCiAgICAgIGl0ZW0uZ2V0SXRlbSgpLmdldFRpdGxlKCksCiAgICAgIGl0ZW0uZ2V0UmVzcG9uc2UoKQogICAgXSkKICApOwp9CgovKiAtLS0tLS0tLS0tIEhlbHBlcjogR2V0IHF1ZXN0aW9uIGJ5IGluZGV4IGluIEZVTEwgTElTVCAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIGdldFF1ZXN0aW9uQnlJbmRleChhbGxJdGVtcywgaW5kZXgpIHsKICBjb25zdCBpdGVtID0gYWxsSXRlbXNbaW5kZXggLSAxXTsKICByZXR1cm4gaXRlbSA/IGl0ZW0uZ2V0VGl0bGUoKSA6IG51bGw7Cn0KCi8qIC0tLS0tLS0tLS0gTWVzc2FnZSBjb250ZW50IHcvIFVzZXIgSUQgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBjcmVhdGVEaXNjb3JkTWVzc2FnZUNvbnRlbnQocmVzcG9uc2VzLCBhbGxJdGVtcykgewogIGNvbnN0IHVzZXJJZFRpdGxlID0gZ2V0UXVlc3Rpb25CeUluZGV4KGFsbEl0ZW1zLCB1c2VySURRdWVzdGlvbik7CiAgY29uc3QgdXNlcklEID0gcmVzcG9uc2VzLmdldCh1c2VySWRUaXRsZSkgfHwgIiI7CgogIGNvbnNvbGUubG9nKGBEaXNjb3JkIFVzZXIgSUQ6ICR7dXNlcklEfWApOwogIHJldHVybiBtZXNzYWdlQ29udGVudC5yZXBsYWNlKCJ7ZGlzY29yZFVzZXJJRH0iLCB1c2VySUQpOwp9CgovKiAtLS0tLS0tLS0tIFRocmVhZCBOYW1lIEJ1aWxkZXIgKEdMT0JBTCBsb29rdXApIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gY3JlYXRlVGhyZWFkTmFtZShyZXNwb25zZXMsIGFsbEl0ZW1zKSB7CiAgY29uc3QgdXNlcm5hbWVUaXRsZSA9IGdldFF1ZXN0aW9uQnlJbmRleChhbGxJdGVtcywgdXNlcm5hbWVRdWVzdGlvbik7CiAgY29uc3QgdXNlcm5hbWUgPSByZXNwb25zZXMuZ2V0KHVzZXJuYW1lVGl0bGUpIHx8ICIiOwoKICBjb25zb2xlLmxvZyhgRGlzY29yZCBVc2VybmFtZTogJHt1c2VybmFtZX1gKTsKCiAgaWYgKCF0aHJlYWROYW1lUG9zaXRpb24pIHJldHVybiAiIjsKCiAgbGV0IG5hbWU7CiAgc3dpdGNoICh0aHJlYWROYW1lUG9zaXRpb24pIHsKICAgIGNhc2UgInN0YXJ0IjogbmFtZSA9IGAke3VzZXJuYW1lfSR7ZGlzY29yZFRocmVhZE5hbWVQYXJ0fWA7IGJyZWFrOwogICAgY2FzZSAiZW5kIjogbmFtZSA9IGAke2Rpc2NvcmRUaHJlYWROYW1lUGFydH0ke3VzZXJuYW1lfWA7IGJyZWFrOwogICAgZGVmYXVsdDogbmFtZSA9IGRpc2NvcmRUaHJlYWROYW1lUGFydDsKICB9CiAgcmV0dXJuIHRydW5jYXRlKG5hbWUsIERJU0NPUkRfTElNSVRTLlRIUkVBRF9OQU1FKTsKfQoKLyogLS0tLS0tLS0tLSBHZXQgZmlyc3QgcGFnZSBxdWVzdGlvbnMgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBnZXRGaXJzdFBhZ2VRdWVzdGlvbnMoZm9ybSkgewogIGNvbnN0IGl0ZW1zID0gZm9ybS5nZXRJdGVtcygpOwogIGNvbnN0IGlkeCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkuZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLlBBR0VfQlJFQUspOwogIHJldHVybiBpdGVtcy5zbGljZSgwLCBpZHggIT09IC0xID8gaWR4IDogdW5kZWZpbmVkKTsKfQoKLyogLS0tLS0tLS0tLSBFbWJlZCBGaWVsZCBCdWlsZGVyIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gY3JlYXRlRW1iZWRGaWVsZHMoaXRlbXMsIHJlc3BvbnNlcykgewogIHJldHVybiBpdGVtcy5yZWR1Y2UoKGZpZWxkcywgcXVlc3Rpb24pID0+IHsKICAgIGxldCByZXNwb25zZSA9IGZvcm1hdFJlc3BvbnNlKHF1ZXN0aW9uLCByZXNwb25zZXMpOwoKICAgIGlmICghcmVzcG9uc2UgfHwgKHNraXBFbXB0eVJlc3BvbnNlcyAmJiByZXNwb25zZSA9PT0gbm9BbnN3ZXJNZXNzYWdlKSkgcmV0dXJuIGZpZWxkczsKCiAgICBmaWVsZHMucHVzaCh7CiAgICAgIG5hbWU6IHRydW5jYXRlKHF1ZXN0aW9uLmdldFRpdGxlKCksIERJU0NPUkRfTElNSVRTLkZJRUxEX05BTUUpLAogICAgICB2YWx1ZTogdHJ1bmNhdGUoYCR7ZW1iZWRGaWVsZFZhbHVlUHJlZml4fSR7cmVzcG9uc2V9YCwgRElTQ09SRF9MSU1JVFMuRklFTERfVkFMVUUpLAogICAgICBpbmxpbmU6IGZhbHNlCiAgICB9KTsKCiAgICByZXR1cm4gZmllbGRzOwogIH0sIFtdKTsKfQoKLyogLS0tLS0tLS0tLSBGb3JtYXQgcmVzcG9uc2VzIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gZm9ybWF0UmVzcG9uc2UocXVlc3Rpb24sIHJlc3BvbnNlcykgewogIGxldCByZXNwb25zZSA9IHJlc3BvbnNlcy5nZXQocXVlc3Rpb24uZ2V0VGl0bGUoKSkgfHwgbm9BbnN3ZXJNZXNzYWdlOwoKICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLkZJTEVfVVBMT0FEKSByZXR1cm4gZm9ybWF0RmlsZVJlc3BvbnNlKHJlc3BvbnNlKTsKICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBGb3JtQXBwLkl0ZW1UeXBlLlRJTUUpIHJldHVybiBmb3JtYXRUaW1lKHJlc3BvbnNlKTsKICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gZm9ybWF0RGF0ZVRpbWUocmVzcG9uc2UpOwoKICByZXNwb25zZSA9IFN0cmluZyhyZXNwb25zZSkKICAgIC5yZXBsYWNlKC8sKFxTKS9nLCAiLCAkMSIpCiAgICAucmVwbGFjZSgvXG57Mix9L2csICJcbiIpOwoKICByZXR1cm4gcmVzcG9uc2U7Cn0KCmZ1bmN0aW9uIGZvcm1hdEZpbGVSZXNwb25zZShyZXNwb25zZSkgewogIGlmICghQXJyYXkuaXNBcnJheShyZXNwb25zZSkgfHwgcmVzcG9uc2UubGVuZ3RoID09PSAwKSByZXR1cm4gbm9BbnN3ZXJNZXNzYWdlOwogIHJldHVybiByZXNwb25zZS5tYXAoZiA9PgogICAgL15odHRwcz86XC9cLy8udGVzdChmKSA/IGYgOiBgPGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9pZD0ke2Z9PmAKICApLmpvaW4oIlxuIik7Cn0KCmZ1bmN0aW9uIGZvcm1hdFRpbWUodCkgewogIGNvbnN0IFtoLCBtXSA9IHQuc3BsaXQoIjoiKS5tYXAoTnVtYmVyKTsKICBjb25zdCBhbXBtID0gaCA+PSAxMiA/ICJQTSIgOiAiQU0iOwogIGNvbnN0IGgxMiA9IGggJSAxMiB8fCAxMjsKICByZXR1cm4gYCR7aDEyfToke20udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAiMCIpfSAke2FtcG19YDsKfQoKZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZGF0ZSkgewogIGNvbnN0IHVuaXggPSBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7CiAgcmV0dXJuIGA8dDoke3VuaXh9OmY+YDsKfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIFNFTkQgRklSU1QgRU1CRUQgKEZPUlVNIERFVEVDVElPTikKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmZ1bmN0aW9uIHNlbmRFbWJlZFRvRGlzY29yZFdpdGhGYWxsYmFjayhlbWJlZEZpZWxkcywgZGlzY29yZE1lc3NhZ2VDb250ZW50KSB7CiAgY29uc3QgZm9ybVRpdGxlID0gRm9ybUFwcC5nZXRBY3RpdmVGb3JtKCkuZ2V0VGl0bGUoKTsKCiAgY29uc3QgZm9ydW1QYXlsb2FkID0gewogICAgY29udGVudDogZGlzY29yZE1lc3NhZ2VDb250ZW50LAogICAgZW1iZWRzOiBbewogICAgICBjb2xvcjogZ2V0TmV4dEVtYmVkQ29sb3IoKSwKICAgICAgZGVzY3JpcHRpb246IHRydW5jYXRlKGVtYmVkRGVzY3JpcHRpb25UZW1wbGF0ZS5yZXBsYWNlKCJ7Zm9ybVRpdGxlfSIsIGZvcm1UaXRsZSksIERJU0NPUkRfTElNSVRTLkRFU0NSSVBUSU9OKSwKICAgICAgZmllbGRzOiBlbWJlZEZpZWxkcwogICAgfV0sCiAgICBjb21wb25lbnRzOiBbXQogIH07CgogIGlmIChBcnJheS5pc0FycmF5KERJU0NPUkRfRk9SVU1fVEFHUykgJiYgRElTQ09SRF9GT1JVTV9UQUdTLmxlbmd0aCAmJiB3ZWJob29rU3VwcG9ydHNGb3J1bSkgewogICAgZm9ydW1QYXlsb2FkLmFwcGxpZWRfdGFncyA9IERJU0NPUkRfRk9SVU1fVEFHUzsKICB9CiAgaWYgKHdlYmhvb2tTdXBwb3J0c0ZvcnVtICYmICFkaXNjb3JkVGhyZWFkSWQgJiYgZGlzY29yZFRocmVhZE5hbWUgJiYgZGlzY29yZFRocmVhZE5hbWUudHJpbSgpICE9PSAiIikgewogICAgZm9ydW1QYXlsb2FkLnRocmVhZF9uYW1lID0gZGlzY29yZFRocmVhZE5hbWU7CiAgfQoKICBpZiAoIXdlYmhvb2tTdXBwb3J0c0ZvcnVtICYmIGZvcnVtRGV0ZWN0aW9uRG9uZSkgewogICAgY29uc3Qgbm9ybWFsUGF5bG9hZCA9IHsKICAgICAgY29udGVudDogZGlzY29yZE1lc3NhZ2VDb250ZW50LAogICAgICBlbWJlZHM6IGZvcnVtUGF5bG9hZC5lbWJlZHMsCiAgICAgIGNvbXBvbmVudHM6IFtdCiAgICB9OwogICAgY29uc3Qgbm9ybWFsUmVzcCA9IHNlbmRUb0Rpc2NvcmQobm9ybWFsUGF5bG9hZCk7CiAgICBsb2dTZW5kUmVzdWx0KG5vcm1hbFJlc3AsICJub3JtYWwgKGtub3duKSIpOwogICAgcmV0dXJuOwogIH0KCiAgY29uc3QgZmlyc3RSZXNwVGV4dCA9IHNlbmRUb0Rpc2NvcmQoZm9ydW1QYXlsb2FkKTsKICBjb25zdCBmaXJzdEpzb24gPSB0cnlQYXJzZUpzb24oZmlyc3RSZXNwVGV4dCk7CgogIGlmIChpbmRpY2F0ZXNOb3RGb3J1bShmaXJzdEpzb24pKSB7CiAgICB3ZWJob29rU3VwcG9ydHNGb3J1bSA9IGZhbHNlOwogICAgZm9ydW1EZXRlY3Rpb25Eb25lID0gdHJ1ZTsKICAgIGNvbnNvbGUud2Fybigi4pqg77iPIE5vdCBhIGZvcnVtLiBTd2l0Y2hpbmcgdG8gTk9STUFMIE1PREUuIik7CgogICAgY29uc3Qgbm9ybWFsUGF5bG9hZCA9IHsKICAgICAgY29udGVudDogZGlzY29yZE1lc3NhZ2VDb250ZW50LAogICAgICBlbWJlZHM6IGZvcnVtUGF5bG9hZC5lbWJlZHMsCiAgICAgIGNvbXBvbmVudHM6IFtdCiAgICB9OwogICAgY29uc3Qgc2Vjb25kUmVzcFRleHQgPSBzZW5kVG9EaXNjb3JkKG5vcm1hbFBheWxvYWQpOwogICAgbG9nU2VuZFJlc3VsdChzZWNvbmRSZXNwVGV4dCwgIm5vcm1hbCAocmVzZW5kKSIpOwogICAgcmV0dXJuOwogIH0KCiAgaWYgKGZpcnN0SnNvbiAmJiBmaXJzdEpzb24uY2hhbm5lbF9pZCkgewogICAgZGlzY29yZFRocmVhZElkID0gZmlyc3RKc29uLmNoYW5uZWxfaWQ7CiAgfSBlbHNlIGlmIChmaXJzdEpzb24gJiYgZmlyc3RKc29uLmlkICYmICFkaXNjb3JkVGhyZWFkSWQpIHsKICAgIGRpc2NvcmRUaHJlYWRJZCA9IGZpcnN0SnNvbi5pZDsKICB9CgogIGZvcnVtRGV0ZWN0aW9uRG9uZSA9IHRydWU7CiAgbG9nU2VuZFJlc3VsdChmaXJzdFJlc3BUZXh0LCAiZm9ydW0gKGZpcnN0IHNlbmQpIik7Cn0KCi8qIC0tLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHRyeVBhcnNlSnNvbih0ZXh0KSB7CiAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIG51bGw7IH0KfQoKZnVuY3Rpb24gaW5kaWNhdGVzTm90Rm9ydW0oanNvbikgewogIGlmICghanNvbikgcmV0dXJuIGZhbHNlOwogIGNvbnN0IGVyckNvZGUgPSBqc29uLmNvZGU7CiAgaWYgKGVyckNvZGUgPT09IDIyMDAwMyB8fCBlcnJDb2RlID09PSAyMjAwMDEpIHJldHVybiB0cnVlOwogIGlmIChqc29uLm1lc3NhZ2UgJiYgL2ZvcnVtfHRocmVhZF9uYW1lfGFwcGxpZWRfdGFncy9pLnRlc3QoanNvbi5tZXNzYWdlKSkgcmV0dXJuIHRydWU7CiAgcmV0dXJuIGZhbHNlOwp9CgpmdW5jdGlvbiBsb2dTZW5kUmVzdWx0KHJlc3BvbnNlVGV4dCwgdGFnKSB7CiAgY29uc3QgaiA9IHRyeVBhcnNlSnNvbihyZXNwb25zZVRleHQpOwogIGlmIChqICYmIGouY29kZSkgY29uc29sZS53YXJuKGBEaXNjb3JkIGVycm9yICgke3RhZ30pOmAsIGopOwogIGVsc2UgY29uc29sZS5sb2coYFNlbnQgKCR7dGFnfSlgKTsKfQoKLyogLS0tLS0tLS0tLSBTZW5kZXIgLS0tLS0tLS0tLSAqLwpmdW5jdGlvbiBzZW5kVG9EaXNjb3JkKHBheWxvYWQpIHsKICB0cnkgewogICAgY29uc3QgdXJsID0gYCR7RElTQ09SRF9XRUJIT09LX1VSTH0ke2Rpc2NvcmRUaHJlYWRJZCA/IGAmdGhyZWFkX2lkPSR7ZGlzY29yZFRocmVhZElkfWAgOiAiIn1gOwogICAgY29uc3QgcmVzID0gVXJsRmV0Y2hBcHAuZmV0Y2godXJsLCB7CiAgICAgIG1ldGhvZDogInBvc3QiLAogICAgICBoZWFkZXJzOiB7ICJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiIgfSwKICAgICAgcGF5bG9hZDogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksCiAgICAgIG11dGVIdHRwRXhjZXB0aW9uczogdHJ1ZQogICAgfSk7CiAgICBjb25zdCBjb2RlID0gcmVzLmdldFJlc3BvbnNlQ29kZSgpOwogICAgY29uc3QgdGV4dCA9IHJlcy5nZXRDb250ZW50VGV4dCgpOwogICAgaWYgKGNvZGUgPCAyMDAgfHwgY29kZSA+PSAzMDApIHsKICAgICAgY29uc29sZS53YXJuKGBEaXNjb3JkIEhUVFAgJHtjb2RlfTpgLCB0ZXh0KTsKICAgIH0KICAgIHJldHVybiB0ZXh0OwogIH0gY2F0Y2ggKGUpIHsKICAgIGNvbnNvbGUuZXJyb3IoIkVycm9yIHNlbmRpbmcgdG8gRGlzY29yZDoiLCBlKTsKICAgIHJldHVybiAie30iOwogIH0KfQoKLyogLS0tLS0tLS0tLSBQcm9jZXNzIGFsbCBzZWN0aW9ucyAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9ucyhhbGxJdGVtcywgcmVzcG9uc2VzKSB7CiAgbGV0IHNlY3Rpb25UaXRsZSA9ICIiOwogIGxldCBzZWN0aW9uSXRlbXMgPSBbXTsKCiAgYWxsSXRlbXMuZm9yRWFjaChpdGVtID0+IHsKICAgIGlmIChpdGVtLmdldFR5cGUoKSA9PT0gRm9ybUFwcC5JdGVtVHlwZS5QQUdFX0JSRUFLKSB7CiAgICAgIGlmIChzZWN0aW9uVGl0bGUpIHNlbmRTZWN0aW9uKHNlY3Rpb25UaXRsZSwgc2VjdGlvbkl0ZW1zLCByZXNwb25zZXMpOwogICAgICBzZWN0aW9uVGl0bGUgPSBpdGVtLmdldFRpdGxlKCk7CiAgICAgIHNlY3Rpb25JdGVtcyA9IFtdOwogICAgfSBlbHNlIHsKICAgICAgc2VjdGlvbkl0ZW1zLnB1c2goaXRlbSk7CiAgICB9CiAgfSk7CgogIGlmIChzZWN0aW9uVGl0bGUpIHNlbmRTZWN0aW9uKHNlY3Rpb25UaXRsZSwgc2VjdGlvbkl0ZW1zLCByZXNwb25zZXMpOwp9CgovKiAtLS0tLS0tLS0tIFNlbmQgZWFjaCBzZWN0aW9uIC0tLS0tLS0tLS0gKi8KZnVuY3Rpb24gc2VuZFNlY3Rpb24odGl0bGUsIGl0ZW1zLCByZXNwb25zZXMpIHsKICBjb25zdCBmaWVsZHMgPSBjcmVhdGVFbWJlZEZpZWxkcyhpdGVtcywgcmVzcG9uc2VzKTsKICBpZiAoIWZpZWxkcy5sZW5ndGgpIHJldHVybiBjb25zb2xlLmxvZyhgU2tpcHBlZCBlbXB0eSBzZWN0aW9uOiAke3RpdGxlfWApOwoKICBjb25zdCBwYXlsb2FkID0gewogICAgZW1iZWRzOiBbewogICAgICBjb2xvcjogZ2V0TmV4dEVtYmVkQ29sb3IoKSwKICAgICAgdGl0bGU6IHRpdGxlLAogICAgICBmaWVsZHM6IGZpZWxkcwogICAgfV0sCiAgICBjb21wb25lbnRzOiBbXQogIH07CgogIGlmICh3ZWJob29rU3VwcG9ydHNGb3J1bSAmJiBBcnJheS5pc0FycmF5KERJU0NPUkRfRk9SVU1fVEFHUykgJiYgRElTQ09SRF9GT1JVTV9UQUdTLmxlbmd0aCkgewogICAgcGF5bG9hZC5hcHBsaWVkX3RhZ3MgPSBESVNDT1JEX0ZPUlVNX1RBR1M7CiAgfQoKICBjb25zdCByZXNwVGV4dCA9IHNlbmRUb0Rpc2NvcmQocGF5bG9hZCk7CiAgY29uc3QganNvbiA9IHRyeVBhcnNlSnNvbihyZXNwVGV4dCk7CgogIGlmIChqc29uICYmIGpzb24uY29kZSkgewogICAgY29uc29sZS53YXJuKCJTZWN0aW9uIGVycm9yOiIsIGpzb24pOwogICAgaWYgKCFmb3J1bURldGVjdGlvbkRvbmUgJiYgaW5kaWNhdGVzTm90Rm9ydW0oanNvbikpIHsKICAgICAgd2ViaG9va1N1cHBvcnRzRm9ydW0gPSBmYWxzZTsKICAgICAgZm9ydW1EZXRlY3Rpb25Eb25lID0gdHJ1ZTsKICAgIH0KICB9CgogIGNvbnNvbGUubG9nKGBTZW50IHNlY3Rpb246ICR7dGl0bGV9YCk7Cn0KCi8qIC0tLS0tLS0tLS0gVXRpbGl0eSAtLS0tLS0tLS0tICovCmZ1bmN0aW9uIHRydW5jYXRlKHRleHQsIG1heCwgc3VmZml4ID0gIi4uLiIpIHsKICByZXR1cm4gdGV4dC5sZW5ndGggPiBtYXggPyB0ZXh0LnNsaWNlKDAsIG1heCAtIHN1ZmZpeC5sZW5ndGgpICsgc3VmZml4IDogdGV4dDsKfQoKZnVuY3Rpb24gZ2V0TmV4dEVtYmVkQ29sb3IoKSB7CiAgcmV0dXJuIEVNQkVEX0NPTE9SU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFTUJFRF9DT0xPUlMubGVuZ3RoKV07Cn0K";

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

/* ---------- Tag list ---------- */
const tagList = document.getElementById("tagList");
const addTagBtn = document.getElementById("addTagBtn");

function addTagRow(value) {
  const row = document.createElement("div");
  row.className = "tag-row";

  const input = document.createElement("input");
  input.className = "input";
  input.type = "text";
  input.placeholder = "e.g. 1234567890123456789";
  input.value = value || "";
  input.addEventListener("input", update);

  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-outline btn-icon";
  removeBtn.type = "button";
  removeBtn.setAttribute("aria-label", "Remove tag");
  removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  removeBtn.addEventListener("click", () => {
    row.remove();
    update();
  });

  row.appendChild(input);
  row.appendChild(removeBtn);
  tagList.appendChild(row);
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

/* ---------- Field refs ---------- */
const els = {
  webhookUrl: document.getElementById("webhookUrl"),
  usernameQuestion: document.getElementById("usernameQuestion"),
  userIDQuestion: document.getElementById("userIDQuestion"),
  threadNamePosition: document.getElementById("threadNamePosition"),
  discordThreadNamePart: document.getElementById("discordThreadNamePart"),
  messageContent: document.getElementById("messageContent"),
  noAnswerMessage: document.getElementById("noAnswerMessage"),
  skipEmptyResponses: document.getElementById("skipEmptyResponses"),
  embedFieldValuePrefix: document.getElementById("embedFieldValuePrefix"),
  embedDescriptionTemplate: document.getElementById("embedDescriptionTemplate"),
  colorMode: document.getElementById("colorMode"),
  singleColor: document.getElementById("singleColor")
};

const singleColorField = document.getElementById("singleColorField");

els.colorMode.addEventListener("change", () => {
  singleColorField.style.display = els.colorMode.value === "single" ? "" : "none";
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

  const colorsLiteral = els.colorMode.value === "single"
    ? "[" + hexToLiteral(els.singleColor.value) + "]"
    : "[\n  " + DEFAULT_PALETTE.join(", ").replace(/(.{1,60},) /g, "$1\n  ") + "\n]";

  return `/**************************************************
  Google Form Response To Discord
  Generated by the Config Builder UI
**************************************************/

/* ---------- Configurations --------- */

// Webhook URL for sending messages to a Discord forum channel (Do not delete or replace "?wait=true")
const DISCORD_WEBHOOK_URL = ${jsStr(webhook)};

// Tag IDs to apply when creating a forum post (leave empty array if not using forum tags)
const DISCORD_FORUM_TAGS = ${tagsLiteral};

// Position of the question in the Google Form where applicants provide their Discord user ID
const userIDQuestion = ${Number(els.userIDQuestion.value) || 1};

// Position of the question in the Google Form where applicants provide their Discord username
const usernameQuestion = ${Number(els.usernameQuestion.value) || 1};

// Part of the thread name
const discordThreadNamePart = ${jsStr(els.discordThreadNamePart.value)};

// Set to "start" for prefix, "end" for suffix, or null to disable
const threadNamePosition = ${threadPos};

// Message content to accompany the embed, mentioning the applicant
// Available placeholders:
// - {discordUserID}: Discord user ID of the applicant
const messageContent = ${jsStr(els.messageContent.value)};

// A default message for questions that have no response
const noAnswerMessage = ${jsStr(els.noAnswerMessage.value)};

// Set to true to skip empty answers, false to include them
const skipEmptyResponses = ${skipEmpty};

/* ---------- Embed Appearance ---------- */

// Template for the main embed's description (top of the box).
// Available placeholders:
// - {formTitle}: Title of the Google Form
const embedDescriptionTemplate = ${jsStr(els.embedDescriptionTemplate.value)};

// Text prepended to each answer's value inside the embed.
const embedFieldValuePrefix = ${jsStr(els.embedFieldValuePrefix.value)};

// Embed colors (hex). One color picked at random per embed/section.
const EMBED_COLORS = ${colorsLiteral};`;
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

/* ---------- Init ---------- */
update();
