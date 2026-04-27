let courses = [
 {id:1,name:"DBMS"},
 {id:2,name:"DSa"}
]

const getCourses = (req,res)=>{
    res.json(courses)
}

const createCourse = (req,res)=>{
    const course = req.body

    const newCourse = {
        id:courses.length+1,
        ...course
    }

    courses.push(newCourse)

    res.json(newCourse)
}

module.exports = {
    getCourses,
    createCourse
}