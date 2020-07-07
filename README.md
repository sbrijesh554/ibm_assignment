# ibm_assignment

Steps to run project:

1) npm i
2) npm start

I have created a mock service at http://mockable.io/ for fetching country list.
In case mockable is down try hardcoding the below data in componentDidMount like this:
            this.setState({
                countryList:["India", "USA","Russia","Austaria", "New Zealand", "Japan","Mexico","Brazil"],
                cacheList: ["India", "USA","Russia","Austaria", "New Zealand", "Japan","Mexico","Brazil"],
                errorText: null
            });
 and comment out the rest of the lifecycle code.
