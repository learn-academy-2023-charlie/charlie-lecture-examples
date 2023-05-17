## POSTGRESQL 5/17/23 Charlie

### terminal commands
- `$ psql` - for the sql console
- `$ \l` - lists all the databases on local machine
- `$ q` - to exit the database lists
- `$ exit` - to exit the console

- PGAdmin (Elephant icon)
- countries db
- query syntax: keywords are in all capital letters

### query for all the data entires on the table
- to see all the columns and rows in the database
```sql
  SELECT * FROM country
```
  - SELECT: stating the column headers you want to display
  - *: universal selector that means all
  - FROM: stating the database you are making the query on
  - country: due to naming convention databases are referenced as singular

### query for specific data entries on the table
- to obtain specific column headers
```sql
  SELECT name, population
  FROM country
```

### LIMIT place limitation on the amount of data entries displayed
- to limit the amount of instances returned
```sql
  SELECT name, population
  FROM country
  LIMIT 10
```

### ORDER BY, DESC  place the data entries in descending order
- to create an order with a limitation
```sql
  SELECT name, continent, population
  FROM country
  ORDER BY population DESC
  LIMIT 10
```

### WHERE setting conditions on what data entries get displayed
- to set conditions on the query
```sql
  SELECT name, continent
  FROM country
  WHERE name = 'Spain'
```

### < setting relational conditions
- to make queries involving numeric conditions
```sql
  SELECT name, continent, population
  FROM country
  WHERE population < 5e5
```
- `e` is shorthand syntax to write the amount of places to move a decimal to the right
  - 5e5 is the same as 500000

### LIKE % query for data entries that match a string
- to make queries that match a variation of a string
```sql
SELECT name, continent, population
FROM country
WHERE continent LIKE 'Ocean%'
```

### AS temporay columns
- introduce a temporary column
```sql
  SELECT name, population, surfacearea, population/surfacearea AS population_density
  FROM country
```
