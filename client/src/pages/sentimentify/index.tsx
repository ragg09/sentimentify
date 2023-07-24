import Button from '@/src/components/Button';
import Container from '@/src/components/Container';
import TextArea from '@/src/components/FormElements/TextArea';
import Headings from '@/src/components/Headings';
import { Fragment, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Sentimentify = (): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Container className=" flex justify-center">
        <Headings option={'h1'} text={'Sentimentify'} />
      </Container>

      <Container className=" flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            id="sentence"
            placeholder="I love you!"
            className="w-[600px]"
            {...register('sentence', { required: true, minLength: 3 })}
            error={errors.sentence !== undefined && 'This field is required'}
          />
          <div className="flex justify-center">
            <Button text="Analyze" type="submit" />
          </div>
        </form>
      </Container>

      <Container className="">
        <p className="flex justify-center">Sentiment</p>
        <p className="flex justify-center">Explanation</p>
      </Container>
    </Fragment>
  );
};

export default Sentimentify;
