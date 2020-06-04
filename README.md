how to run


1.cd into project and do yarn for installing dependencies
2. do yarn start for running the project in browser
3. do yarn test to run the unit tests



How is the auto complete working:


I used inverted index to construct the hash map for fast lookup for the words i.e say, summary is "apples are red and oranges are oranges and papaya is light-blue". So, i first split the summary using whitespaces and "-" then for the rsulting array of words i remove the prepositions and convert plurals into singulars. All theses functions are put in tokenizers and are completely composable so the can be easily removed or more functions(tokenizers) can be added in to pre-process the keys(words) of inverted index hash map.

corresponding to each key there is a value array which stores the indexes of the books in whose summary was the key present.

For every word longer than three letters all it's possible substrings are also stored as keys in the map.

When we type in the search bar the search string is split into words and the list of ids of books are found in whose summaries' were the words present. Then the intersection of the list of ids is collected to find the more correct mathces.





