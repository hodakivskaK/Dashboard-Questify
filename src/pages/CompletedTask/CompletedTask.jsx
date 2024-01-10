
import { useEffect } from "react";
import { useDispatch, useSelector  } from 'react-redux'

import { Header } from "components/Header/Header";
import { TaskList } from "components/TaskList/TaskList";
import Loader from "components/Loader/Loader";

import { fetchCard } from 'redux/cards/cardsOperation'
import { getIsLoading } from "redux/cards/cardsSelector";


export default function CompletedTaskPage(){
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchCard())
      }, [dispatch])
   
        return (
            <div >
            <Header/>
            {isLoading?<Loader/>: <TaskList /> }

            </div>
          ) ;
      
    }