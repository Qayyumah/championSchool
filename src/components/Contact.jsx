"use client"
import styles from "../assets/contact.module.css"
import { MdHorizontalRule } from "react-icons/md"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const Contact = () => {
  // Validation Schema
  const schema = yup.object().shape({
    email: yup.string().email("Email is not valid").required("Email is required!"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data)
  }

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#4747d7",
      }}
      className={styles.contactSection}
    >
      <div className={styles.subscribe}>
        <div className={styles.subBox}>
          <div className={styles.subscribeText}>
            <MdHorizontalRule size={50} style={{ color: "#fff" }} />
            <h3 style={{ padding: "20px" }}>Contact us to enrol your child as part of our school at His Favour High School
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
