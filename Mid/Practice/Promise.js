function getStudentdata() {
    return new Promise((resolve, reject) => {
        // console.log("Requesting student result.....");

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(
                    {
                        id: "23 - 54674 - 3",
                        name: "jibon",
                        department: "CSE",
                        marks: 90

                    });
            }
            else {
                reject("error");

            }
        }, 3000)

    });
}
async function displayResult() {
    console.log("getting student result....")
    try {
        const student = await getStudentdata();
        console.log("Student Result Received");
        console.log("Id:", student.id);
        console.log("Name:", student.name);
        console.log("Department:", student.department);
        console.log("Marks:", student.marks);
        console.log("Result Processing Completed");

    }
    catch (error) {
        console.log("Error", error);

    }
}
displayResult();