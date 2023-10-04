import {useForm, useWatch} from 'react-hook-form'


export default function Form() {
    const {register, handleSubmit,formState:{errors}, watch} = useForm();

    //handleSubmit() : 두개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는 유효하지 않을 떄 실행되는 함수 (선택)

    const onValid= ( data ) =>{
        console.log('onValid',data)
    }

    const onInValid= ( err ) =>{
        console.log('onInValid',err)
    }
    //실시간으로 오류를 체크 
    console.log('errors',errors)

    console.log('watch',watch('username'))

    return(
        <>
            <form onSubmit={handleSubmit(onValid,onInValid)}>
                <input 
                    type="text" 
                    {...register('username',{
                        required : '이름을 입력하세요', 
                        minLength : {
                            message : '최소 2 글자 이상 작성하세요',
                            value : 2}
                            }
                        )
                    }
                />
                {/* username의 존재 유무에 따라 메세지를 띄워줌 */}
                {errors.username?.message}
                <br/>
                <input 
                    type="text" 
                    {...register('email',{
                        required : '이메일을 입력하세요',
                        // 원하는 오류유형 만들기
                        validate : {useGmail : (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다'}
                    })}/>
                {errors.email?.message}
                <br/>
                <input type="text" {...register('password')}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}