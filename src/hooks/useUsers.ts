import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { createUser, deleteUser, getUsers, updateUser } from '../services/user';

type UseType = 'DATA' | 'ACTIONS';
type ActionType = 'CREATE' | 'UPDATE' | 'DELETE';

const handleUsersFunction = (action: ActionType, t: Function) => {
  switch (action) {
    case 'CREATE':
      return {
        actionFn: createUser,
        fnMsg: t('Users.usersApiCreateLabel'),
      };
    case 'UPDATE':
      return {
        actionFn: updateUser,
        fnMsg: t('Users.usersApiUpdateLabel'),
      };
    case 'DELETE':
      return {
        actionFn: deleteUser,
        fnMsg: t('Users.usersApiDeleteLabel'),
      };
    default:
      return {
        actionFn: () => {},
        fnMsg: '',
      };
  }
};

export const useUsers = (type: UseType, userId?: number) => {
  const { toast, setAppState } = useContext(AppContext);
  const [data, setData] = useState<any | null>(null);
  const [reload, setReload] = useState<number>(0);

  const reloadFn = () => {
    setData(null);
    setReload((prev) => prev + 1);
  };

  const usersAction = async (action: ActionType, data: any) => {
    let t: any;
    const { actionFn, fnMsg } = handleUsersFunction(action, t);
    setAppState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const actionStatus = await Promise.resolve(actionFn(data))
      .then((_) => {
        const msg = `${fnMsg.replace('{name}', data.name)}`;
        toast.success(msg);
        return 'SUCCESS';
      })
      .catch((error) => {
        const msg = error?.response?.data?.header?.errorMsg;
        toast.error(msg);
        return 'ERROR';
      });
    setAppState((prev) => ({
      ...prev,
      isLoading: false,
    }));
    return actionStatus;
  };

  useEffect(() => {
    if (type === 'DATA') {
      (async function () {
        await Promise.resolve(getUsers())
          .then((response) => {
            setData(response?.data);
          })
          .catch((error) => {
            const msg = error?.response?.data?.header?.errorMsg;
            toast.error(msg);
          });
      })();
    }
  }, [toast, reload, type, userId]);

  return {
    data,
    usersAction,
    reloadFn,
  };
};
