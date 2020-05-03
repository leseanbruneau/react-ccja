import React from 'react'

export default function Resources() {
    return (
        <div className="container">
            <p className='display-4'>Technology Websites</p>
            <br />
            <a href="http://spark.apache.org/" >
                Apache Spark
            </a>
            <br /> <br />
            <a href="https://kafka.apache.org/" >
                Apache Kafka
            </a>
            <br /> <br /> <br />
            <p className='display-4'>Training Resources</p>
            <p className='display-5'><strong>Udemy</strong></p>
            <hr />
            <br />
            <a href="https://www.udemy.com/course/apache-spark-for-java-developers/" >
                Apache Spark for Java Developers
            </a>
            <br /> <br />
            <a href="https://www.udemy.com/course/apache-kafka/" >
                Apache Kafka Series - Learn Apache Kafka for Beginners  v2
            </a>
            <br /><br /><br />
            <p className='display-5'><strong>Manning</strong></p>
            <hr />
            <br />
            <a href="https://www.manning.com/books/spark-in-action-second-edition?query=Spark" >
                Spark in Action - Second Edition
            </a>
            <br /> <br />
            <a href="https://www.manning.com/books/kafka-in-action?query=kafka" >
                Kafka in Action - Second Edition
            </a>
        </div>
    )
}
