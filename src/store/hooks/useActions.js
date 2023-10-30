import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import {actions as selectActions} from "../slices/selectSlice.js";

export default function useActions({deps}) {
    const actions = [...selectActions]
    const dispatch = useDispatch()
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map((a) => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        deps ? [dispatch, ...deps] : [dispatch]
    )
}