class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.itemsPerPage = itemsPerPage
        this.collectionLength = collection.length
        this.collection = collection
    }

    _pages(coll, ipp) {
        const arr = []
        for (let i = 0; i < coll.length; i += ipp) {
            arr.push(coll.slice(i, i + ipp))
        }
        return arr
    }

    itemCount() {
        // returns the number of items within the entire collection
        return this.collectionLength
    }

    pageCount() {
        // returns the number of pages
        return this._pages(this.collection, this.itemsPerPage).length
    }

    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        return this._pages(this.collection, this.itemsPerPage)[pageIndex] ? this._pages(this.collection, this.itemsPerPage)[pageIndex].length : -1
    }

    pageIndex(itemIndex) {
        // const item = this.collection[itemIndex]
        // if (item) {
        //     for (let i = 0; i < this._pages().length; i++) {
        //         const a = this._pages()[i]
        //         for (let j = 0; j < this._pages()[i].length; j++) {
        //             if (this._pages()[i][j] === item) {
        //                 return i
        //             }
        //         }
        //     }
        // } else {
        //     return -1
        // }
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex <= this.itemsPerPage) {
            return 0
        }
        if (itemIndex > this.collectionLength) {
            return -1
        } else {
            return this._pages(this.collection.slice(0, itemIndex), this.itemsPerPage).length
        }
    }
}
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

const helper = new PaginationHelper(collection, 10);
console.log(helper._pages(collection,10)) //should == 2
console.log(helper.pageCount()) //should == 2
console.log(helper.itemCount()) //should == 6
console.log(helper.pageItemCount(3)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(1)); // should == -1 since the page is invalid
console.log('----------------------------------------------')
// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(22)); //should == -1