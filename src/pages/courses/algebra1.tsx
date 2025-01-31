import React from "react"
import "../../styles/courses/algebra1.scss"

export const Alg1ContentOfTables = () => {
    return(
    <section className="alg1-toc">
        
        <details>
            <summary>Introduction to Algebra 1</summary>
            Introduction to Algebra 1
        </details>
    </section>
)
}


export const Alg1 = () => {
    return(
    <section className="algebra-1">
        <Alg1ContentOfTables />
        <h2>Hello World! As an example</h2>
    </section>
)
}