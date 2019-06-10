Database(db) -> Collections -> Documents

find().sort().limit() 
skip()

Indexing is the way to group a particular field (basically an array of pointers of documents with particular field)
Query db.system,indexes to find the list of indexes

find() returns a "cursor" and hasNext() to server to retrieve the entire list (rather than send entire list of documents back at once)
findOne() looks only for one and return the document

Use .explain() on cursor can see the amount of document server scans (to locate targets), the search type (general or using index)
