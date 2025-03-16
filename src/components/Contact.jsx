import React from 'react'
import styles from '../assets/contact.module.css'
import { MdHorizontalRule } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Contact = () => {
  // Validation Schema
  const schema = yup.object().shape({
    email: yup.string().email('Email is not valid').required('Email is required!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#4747d7',
      }}
      className={styles.contactSection}
    >
      <div className={styles.subscribe}>
        <div className={styles.subBox}>
          <div className={styles.subscribeText}>
            <MdHorizontalRule size={50} style={{ color: '#fff' }} />
            <h3 style={{ marginBottom: '0' }}>Wish to know more about admissions and</h3>
            <h3 style={{ marginTop: '0' }}>updates? Subscribe now!</h3>
          </div>
          <form className={styles.subscribeInfo} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
              <input type="text" placeholder="Email Address" {...register("email")} />
              {errors.email && <p style={{ color: "red", marginTop:'0', textAlign:'left', marginBottom:'0' }}>{errors.email.message}</p>}
            </div>
            
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;