---
published: false
title: "Log indexing and analysis"
metaTitle: "Log indexing and analysis | WP"
metaDescription: "Your production operations would generate all sorts of logs from variety of sources (your application, routers, switchers, firewalls, intrusion prevention systems, proxy servers etc.). In fact, every device you have on your network has a bunch of log files associated with it. There's an enormous amount of intelligence hidden in those log files.
 Uncovering this invaluable information can guide your business decisions, investigations and security. This is where Log Indexing and Analysis comes into play."

metaTags:
  - Optimize
  - Log indexing and analysis
  - Winning Product Canvas
---


## Why?
Following benefits have made businesses realize the importance of log indexing and analysis. 

- **Assist post-event analysis and troubleshooting** 

    Log files are incredibly useful in tracing a security breach or in troubleshooting an undesirable behavior in your system. With the use of logs, it’s easier to go back into that specific time frame where the problematic event occurred, discover connections with other events, and diagnose the cause of the issue. 

    For instance, in a security breach, you can find out what traffic was allowed through? what firewall rule allowed the intruder to get to the server? etc. In debugging a production issue, can trace user activity that caused the issue etc. This enables developers and system administrators to more easily diagnose and rectify issues. 

- **Improve security intelligence** 

    Monitoring and analyzing system events assist you to promptly identify and respond to data breaches and other security incidents. In addition, this assist your organization in complying with security regulations and audits (ISO/IEC 27001 etc.) as well. 

- **Assist performance tuning** 

    Log analysis provide better visibility into the health and performance of your application and infrastructure stack. With insights on application response times, memory issues, threading issues (deadlocks etc.) and resource usages (on CPU, disk etc.), you can identify performance bottlenecks and address them. 

- **Assist better decision making** 

    Performing analytics on the collected log data interprets your data, provide new information and predict your application user behavior. This assists in data-driven decision making. 

    For example, customer log analysis could uncover that users are unlikely to make a purchase in the middle of the week. This could assist in deciding when to introduce a sales promotion. Also log analysis could provide you with feature usage analysis information, so that you could focus on mostly used features and improve your ROI. 

## How?

Log Indexing and Analysis process can be broken down into the following steps.

#### (1) Determine what types of logs you should collect
Your production system is going to produce all sorts of different logs (event logs, availability logs, audit logs, access logs etc.) from different sources (application servers, database servers, firewalls, intrusion detection systems, switches, routers, etc.). 

The types of logs you should collect mainly depends on your intentions with it. You should determine what types of logs you should extract from which source, as you can’t store them all. It will cost more to store a large amount of data and will also need more resources to perform analytics. 

For instance, for your application servers you won’t need event logs(as it generates a high volume of data on normal operations), but you would need the availability logs(to identify the faults that would impact the availability and stability of the system) and audit logs(to investigate unapproved activities).  


#### (2) Determine how to collect and process log data  
Log files are often scattered across many systems in your production environment in variety of forms. Having all logs in one place in a unified form would make log analysis much effective and efficient. 

Therefore, in determining how to gather and process log data, it’s important to pay attention to following. 

- **Need centralized log aggregation** - Need to collect and aggregate all the logs into a centralized location (with logical separation). Then all the log data will be available in one place for analysis. 

- **Need to clean, parse and transform log data** - Logs that come from different sources are in different formats. There can also be some unstructured logs and incomplete logs with missing values among them. 

    Therefore, the received log data would need some cleaning, pre-processing and transformation (filter out unnecessary log records, apply defaults to missing values in incomplete log records, convert unstructured log data to structured format, transform log data into a unified output format etc.). 

- **Use a Log Collector to collect logs** - The recommended approach for collecting logs is to use a log collector tool(Logstash, Filebeat , Logagent, Fluentd etc.), so that you will be able to configure and customize what kind of information you want to collect. With this approach, you can leave out redundant data and ensure that you gather only the relevant information. You should also consider the EPS (Events Per Second) of each device in configuring. Your log collector tool should also be able to keep up with this speed. 


#### (3) Determine log storage and retention strategy
   
Logs capture enormous amount of data about your system. Storage is costly. Therefore, your log storage and retention strategy is crucial for optimal log analytics. 

Following tips would assist you on this regard. 

- Estimate your initial log storage requirement 

- Determine the required level of data replication. Having higher number of replicas would improve availability and search performance (by executing searches parallel on the replicas). But on the other hand, it would be costly. Also, more replicas mean more time taken for indexing. 

- Determine your log rotation strategy. Log files grow rapidly as new log data is continuously generated and captured. Thus, you need log rotation to open up storage space for more recent log files (time interval after which a log will be deleted, compression approach etc.). Here you may need to consider factors like, 
    - How long would you need log data for an investigation? 
    - Do you need logs to be stored for a longer period for machine learning and pattern recognition? If so, can you afford the cost? etc.

- Ensure you comply with any regulations on data protection and privacy in storing data. For example, GDPR in EU region has introduced the right for individuals to have personal data erased and therefore if you are recording any personal data(upon their consent) in the log files, should have a mechanism to erase them. 


#### (4) Create an effective log indexing scheme  

Log indexing has a big impact on how optimally you can search through your log data. Building an index takes CPU time and disk space as well. Therefore, indexing decisions are quite important (Do we plan to index large amounts of data?, What is the precision to be used for numeric fields?, Should we index stemmed String tokens etc.). 

You may need to consider following facts in tuning your indexing throughput.

- **Better to refresh indices at larger time intervals** - When you index a new log file, new information might not be immediately available for search as it takes some time to create the index. Therefore, you would be able improve your indexing throughput by refreshing indices at larger time intervals. This is achieved by preventing index refreshes while there is ongoing indexing activity and by reducing the cost of merging indices etc.  

    But on the other hand, longer the interval, the time taken for the new information to be available for search would increase.  

- **Buffer and index a collection of log files together** - With a higher index refresh time interval, its recommended to buffer and index a collection of log files together (rather than one at a time). This will yield much better performance. 

    But on the other hand, this would require more memory and CPU utilization. As a result, performance of other activities (search and analysis etc.) can get negatively affected during indexing. Therefore, need to find a balance (probably following an empirical approach)  

- **Be mindful with the replicas during time-critical indexing** - Since the indexing process is repeated in replica nodes, need to be mindful on the number of replicas you are using. Sometimes it might be beneficial to start without replication and add replicas later, once the time-critical indexing has been completed. This is much more efficient (as it’s just a network transfer) than duplicating the indexing process. 
    
    On the other hand, there’s a risk, if the node holding the only copy of the data crashes before its replicated. 

- **Select indexing fields based on your search requirements** - Most of the log analytic tools (Elasticsearch etc.) automatically generates the index mappings for you. But it’s not a good decision to rely on them as they can generate plenty of redundant index mappings. Thus, it’s not recommended to rely on tools for index mapping. You should revisit the index mappings generated by the tools and create indices based on your search patterns. Also, should remove indices on any fields you won’t need to use for your search queries. 

The aforementioned tactics would assist you in creating an effective indexing scheme, which in turn would assist you in optimizing your searches and analysis. 


#### (5) Search and analyze your log data  

In order to leverage log data for better insights, you need an efficient mechanism to search through them and analyse. 

Considering following facts might assist you in this regard.

- **Should consider search performance during indexing decisions** - As indexing and searching compete for resources, allowing higher CPU utilization for indexing can adversely affect search performance. Therefore, need to find a trade-off. 

- **Construct your search queries in a better manner** - Query processing time depends on your search query as well. Therefore, need to be mindful in constructing your search queries. 

    - Leverage your search query patterns to optimize the way data is indexed 
    - Avoid using stop words (“a", "the” etc.) in your search queries 
    - Avoid wildcard queries etc. 

- **Use automatic assistance for log analysis** - In order to perform effective log analysis, you need automatic assistance. Log analytic tools automate and simplify the process of analyzing massive amounts of data. By digging through large volumes of log data, they can uncover relationships, trends and patterns that would remain hidden otherwise. 

    There are some excellent log search and analysis tools (Elasticsearch etc.) that can provide you with automatic assistance. Also, there’s plenty of complete solutions (Splunk, Graylog, Loggly, Sumo Logic etc.) with all the sophisticated capabilities needed for log management. You should perform a cost-benefit analysis and choose an appropriate tool wisely. 

    Keep in mind that you would also need a team of skilled people that know how to set it up, monitor and tune it. More importantly to take decisions and act upon the provided insights by evaluating them. 

- **Combine log analytics with visual exploration** - Visual representations can better convey findings from your underlying log data. 

    For instance, by looking at a graph or a chart, we can quickly catch trends and outliers than when the same set of data is in a tabular format. Therefore, it’s important to use proper visualization tools (Kibana etc.) and techniques.  

    Following tips might assist you in improving your data visualization approach. 

    - Should understand and familiarize yourself with your log data. That would make it easier to create proper visualizations 
    - Try to keep your visualizations simple and avoid over complicating them. Otherwise it’ll be difficult to interpret them. 
    - Choose the right visuals for your purpose and audience. For example, can use customized dashboards with appropriate visuals for different audiences (one dashboard for your security team, another for the performance monitoring team, and another for the sales team etc.) 
    - Try to include comparisons in your charts and reports for better insights (as comparisons provide readers a better perspective on data) 


## References/Further Readings

- [The Complete Guide to Log Analysis: What it is, How it Works, Use Cases & Tools](https://sematext.com/blog/log-analysis/)
- [Log Management](https://sematext.com/guides/log-management/)
- [What is Log Management? A complete logging guide](https://www.graylog.org/post/what-is-log-management-a-complete-logging-guide)
- [What Goes Into Log Analysis?](https://dzone.com/articles/what-goes-into-log-analysis)
- [Log Management: What Is It and Why You Need It](https://dzone.com/articles/log-management-what-is-it-and-why-you-need-it-scal)
- [Tune for indexing speed](https://www.elastic.co/guide/en/elasticsearch/reference/master/tune-for-indexing-speed.html)
- [5 Data Visualization Best Practices](https://www.gooddata.com/blog/5-data-visualization-best-practices-0)
