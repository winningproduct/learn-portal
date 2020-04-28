---
templateKey: "model-post"
indexingField: 9-Optimize
title: "11-Log indexing and analysis"
subtitle: "Gain better insights via log analytics"
date: 2020-04-27T15:04:10.000Z
featuredpost: true
featuredimage: "/img/<content-main-image>.jpeg"

description: 

Your production operations would generate all sorts of logs from variety of sources (your application, routers, switchers, firewalls, intrusion prevention systems, proxy servers etc.). In fact every device you have on your network has a bunch of log files associated with it.
There's an enormous amount of intelligence hidden in those log files. Uncovering those invaluable information can guide your business decisions, investigations and security. This is where Log Indexing and Analysis comes into play.

tags:
  - Optimize
  - Log indexing and analysis
  - Winning Product Canvas
---

![flavor wheel](/img/<content-main-image>.jpeg)

##Why?
Through log indexing and analysis you can gain following benefits.

- **Assist post-event analysis and troubleshooting**

    Log files are incredibly useful in tracing a security breach or in troubleshooting an undesirable behavior in your system. 
With the use of logs, its easier to go back into that specific time frame where the problematic event occurred, discover connections with other events, and diagnose the cause of the issue. 
For instance, In a security breach, you can find out what traffic was allowed through? what firewall rule allowed the intruder to get to the server?  etc. In debugging a production issue, can trace user activity that caused the issue etc.
This enables developers and system administrators to more easily diagnose and rectify issues.

- **Improve security intelligence**

    Monitoring and analyzing system events assist you to promptly identify and respond to data breaches and other security incidents. In addition, this assist your organization to comply with security regulations and audits (ISO/IEC 27001 etc.) as well.

- **Assist performance tuning**

    Log analysis provide better visibility into the health and performance of your application and infrastructure stack. With insights on application response times, memory issues, threading issues(deadlocks etc.) and resource usages (on CPU, disk etc.), you can identify performance bottlenecks and address them. 

- **Assist better decision making**

    Performing data analytics on the collected log data interprets your data, provide new information and predict your application user behavior. This assists in data-driven decision making.
    For example, customer log analysis could uncover that users are unlikely to make a purchase in the middle of the week. This could assist in deciding when to introduce a sales promotion. Also log analysis could provide you with feature usage analysis information, so that you could focus on mostly used features and improve your ROI


##How?

Log Indexing and Analysis process can be broken down into the following Steps.

    (1) Determine what types of logs you should collect
Your production system is going to produce all sorts of different logs (event logs, availability logs, audit logs and access logs etc. ) from different sources (application servers, database servers, firewalls, intrusion detection systems, switches, routers, etc. ).

You should determine what types of logs you should extract from which source, as you can’t store them all. It would cost a lot to store a large amount of data, and also will need more resources to perform analytics. 

The types of logs you should monitor mainly depends on your intentions with log data collection.  
For instance, for your application servers you won’t need event logs(as it generates a high volume of data on normal operations), but you would need the availability logs(to identify the faults that would impact the availability and stability of the system) and audit logs(to investigate an unapproved activities).  


    (2) Determine how to collect and process log data  
Log files are often scattered across many systems in your production environment in variety of forms. Having all logs in one place in a unified form would make log analysis much effective and efficient.
Therefore in determining how to gather and process log data, its important to pay attention to following.
- **Need centralized log aggregation** - Need to collect and aggregate all the logs into a centralized location(with logical separation). Then all the log data will be available in one place for analysis.
- **Need to clean, parse and transform log data** - Logs that come from different sources are in different formats. There can also be some unstructured logs and incomplete logs with missing values among them.   
Therefore the received log data should need some cleaning, pre-processing and transformation.  (filter out unnecessary log records, apply defaults to missing values in incomplete log records, convert unstructured log data to structured format , transform log data into a unified output format etc.). 
- **Use a Log Collector to collect logs** -  The recommended approach for collecting logs is to use a log collector tool(Logstash, Filebeat , Logagent, Fluentd etc.), so that you will be able to configure and customize what kind of information you want to collect. With this approach, you can leave out redundant data and ensure that you gather only the relevant information. You should also consider the EPS (Events Per Second) of each device in configuring. Your log collector tool should also be able to keep up with this speed. 


	(3)	Determine log storage and retention strategy

Logs capture enormous amount of data about your system. Storage is costly. Therefore your log storage and retention strategy is really important for optimal log analytics.

Considering following facts would assist you on this regard.

- Estimate your initial log storage requirement
- Determine the level of data replication that’s required. Having higher number of replicas would improve availability and search performance(by executing searches parallel on the replicas).  But on the other hand, it would be costly and also more replicas means more time taken for indexing. 
- Determine log rotation strategy - log files grows rapidly as new log data is continuously generated and captured. Thus you need a log rotation strategy to open up storage space for more recent log files (time interval after which a log will be deleted, compression approach etc.) .  Here you may need to consider factors like, 
- How long would you need log data for an investigation?
- Do you need logs to be stored for a longer period of time for machine learning and pattern recognition?
- What is the cost involved with storing logs(depends on your log storage approach and tools used)
- Ensure you comply with any regulations on data protection and privacy in storing data. For example, GDPR in EU region has introduced the right for individuals to have personal data erased and therefore if you are recording any personal data(upon their consent) in the log files, should have a mechanism to erase them.


	(4)	Create an effective log indexing scheme
Log indexing has a big impact on how optimally you can search through your log data. 
	Building an index takes CPU time and disk space as well. Therefore indexing decisions are 	quite important (Do we plan to index large amounts of data? What is the precision to be used 	for numeric fields, Should we index stemmed tokens in String fields etc.).

The main focus  here is to achieve higher indexing throughput while achieving high query 	performance and denser storage.

You may need to consider following facts in tuning indexing throughput:

- **Better to reduce index refresh frequency** - When you index a new log file, the new information might not be immediately available for search. Some time is taken in indexing the log file and in refreshing the existing index. By reducing index refresh frequency(i.e by increasing index refresh interval) you would be able improve your indexing throughput. It is achieved by avoiding index refreshes while there is ongoing indexing activity and by reducing the cost of merging indices etc. 
This depends on how long you can wait until the new information is available for search.

- **Better to use bulk indexing** - With a higher index refresh interval, its recommended to buffer and send a collection of log files for indexing(rather than one at a time).
Bulk indexing will yield much better performance. But on the other hand, bigger the index file that’s being processed, lesser the memory and CPU available for other activity like searches.  Therefore need to empirically find the optimal size of a bulk indexing request(i.e., how many log files you bundle in a single index request? ). Above that size, performance will no longer improve and most probably even drop off.  

- **Be mindful with the replicas during time-critical indexing** - Since the indexing process is repeated in replica nodes, need to be mindful on the number of replicas you are using.   
Sometimes it might be beneficial to start without replication and add replicas later, once the time-critical initial indexing has been completed. This is much more efficient(as its just a network transfer) than duplicating the indexing process. 
On the other hand there’s a risk, if the node holding the only copy of the data crashes before its replicated.

- **Select indexing fields based on your search requirements** - Most of the log analytic tools (Elasticsearch etc.) automatically generates the index mappings for you. But its not a good decision to rely on them as they can generate plenty of redundant index mappings. Thus its not recommended to rely on tools for index mapping. You should revisit the index mappings generated by the tool and create indices based on your search patterns. Also should remove indices on any fields you won’t need to use for your search queries. 

The aforementioned tactics would assist you in creating an effective indexing scheme, which in turn would assist you in optimizing your searches and analysis. 


	(5)	Search and analyze your log data

In order to leverage log data for better insights, you are gonna need an efficient mechanism to  search through the log data and analyse.

You may need to consider following facts in tuning your performance:

- **Should consider search performance during indexing decisions** - As indexing and searching compete for resources, allowing higher cpu utilization for indexing can adversely affect search performance. Therefore need to find a trade-off.

- **Construct your search queries in a better manner** - Query processing time depends on your search query as well. Therefore need to be mindful in constructing your search queries.  
  - Leverage your search query patterns to optimize the way data is indexed
  - Avoid using stop words (“a", "the” etc.) in your search queries
  - Avoid wildcard queries.

- **Use automatic assistance for log analysis** - In order to perform effective log analysis, you need automatic assistance. Log analytic tools automate and simplify the process of analyzing massive amounts of data. By digging through large volumes of log data, they can uncover relationships, trends and patterns that would remain hidden otherwise.  

    There are some excellent log search and analysis tools(Elasticsearch etc.) that can provide you with automatic assistance. Also there’s plenty of complete solutions (Splunk, Graylog, Loggly, Sumo Logic etc.) with all the sophisticated capabilities needed for log management. 

    You should perform a cost-benefit analysis and choose an appropriate tool wisely. 
Keep in mind that you would also need a team of skilled people that know how to set it up, monitor and tune it. More importantly take decisions and act upon the provided insights by evaluating them.

- **Combine log analytics with visual exploration** - Visual  representations can better convey findings from your underlying log data. 
For instance, by looking at a graph or a chart, we can quickly catch trends and outliers, than the same set of data is in a tabular format. Therefore its important to use proper visualization tools(Kibana etc.) and techniques. Following tips might assist you in improving your data presentation approach.
   - Should understand and familiarize yourself with your log data. That would make it easier to create proper visualizations
   - Try to keep your visualizations simple and avoid over complicating them. Otherwise it’ll be difficult to interpret them.
   - Try to include comparisons in your charts for better insights (as comparisons provide readers a better perspective on data )
   - Always use dashboards to obtain at a a glance information. You can even have dashboards to visualize variety of metrics and charts targeted for different audiences. (one dashboard for your security team, another for the performance monitoring team, and another for the sales team etc.) 
   - Use log reporting(with numeric and visual elements) to extract a summary of the conducted search and analysis



#References/further readings(links)

[Reference-name](http://website.com)
ex-[Reference](https://www.sciencedirect.com/topics/computer-science/platform-architecture)
