# **Google Search Extractor** - Built with ASP.NET Core 5 & Angular 11 

## INTRODUCTION
* This is a web application to extract Google Search data, built with ASP.NET Core 5 and Angular 11.
* This is built from a web application template - [QuickApp template](https://github.com/emonney/QuickApp).
* This is **not completed** yet. Only frontend pages have been created.

## APPLICATION FLOW
* End-users upload a CSV file containing keywords. 
* Each of these keywords will be used to search on http://www.google.com and **they will start to run as soon as they are uploaded.**
* Screenshot of the page to upload and view result of Keywords:![image](https://user-images.githubusercontent.com/7553482/155568510-d3ecd621-e0da-4c89-97bf-2a0bc8a683b7.png)

## IMPLEMENTATION APPROACH
* For frontend:
	*  KeywordUploadComponent will handle uploading CSV file.
	*  KeywordUploadComponent will also have a section for listening to WebSocket for result of the CSV file to display result in realtime.
* For backend:
	* KeywordController will receive the CSV file, save the file and search keyword with Google Search.
	* When a result for a keyword is ready, the result will be sent to KeywordHub ([SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr) Hub)
	* KeywordHub will notify the frontend KeywordUploadComponent so that the frontend component can display the result.
