export const getSubCategoriesFromList=(title,list)=>{
    for(let l of list){
        if(title===l.title){
            return l.subCategory;
        }
    }

    return null;
}