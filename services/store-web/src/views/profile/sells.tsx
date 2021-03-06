import React from 'react'
import { Box } from 'rebass'
import { useQuery } from '@apollo/react-hooks'
import { MoreLotsQuery, MoreLotsQueryVariables } from '../../graphql/queries/__generated__/MoreLotsQuery'
import { getMoreLotsQuery } from '../../graphql/queries/getLots'
import useCurrentUser from '../../hooks/currentUser'
import { Button, Loading, NullState } from '@item-protocol/ui'
import LotTable from './components/lotTable'
import { ILot } from '@item-protocol/types'

type TData = MoreLotsQuery
type TVariables = MoreLotsQueryVariables

export const SellsView = () => {
  const { me } = useCurrentUser()

  const { data, loading, fetchMore, variables } = useQuery<TData, TVariables>(getMoreLotsQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        seller: me.address,
      },
      cursorInfo: {
        first: 20,
      },
    },
  })

  const connection = data && data.lots
  if (!connection && loading) {
    return <Loading>Loading lots...</Loading>
  }

  const lots =
    connection &&
    connection.edges &&
    connection.edges.length
      ? connection.edges.map(edge => edge.node)
      : []

  const hasNextPage =
    connection &&
    connection.pageInfo &&
    connection.pageInfo.hasNextPage

  if (!lots || !lots.length) {
    return <NullState
      heading={'Lots not found'}
      message={'Here you can see your items for sale'}
    />
  }

  const loadMore = () => {
    const { pageInfo } = connection!
    const { cursorInfo } = variables

    fetchMore({
      variables: {
        ...variables,
        cursorInfo: {
          ...cursorInfo,
          after: pageInfo.endCursor,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.lots) {
          return prev
        }

        const prevLots = prev.lots!
        const newEdges = fetchMoreResult.lots.edges!
        const pageInfo = fetchMoreResult.lots.pageInfo

        return newEdges.length ? {
          ...prev,
          lots: {
            ...prevLots,
            pageInfo: { ...prevLots.pageInfo, ...pageInfo },
            edges: [...prevLots.edges!, ...newEdges!],
          },
        } : prev
      },
    })
  }

  return (
    <Box mb={'lg'}>
      <LotTable lots={lots as ILot[]}/>
      {hasNextPage && <Button
        width={1}
        size={'lg'}
        variant={'secondary'}
        mt={'lg'}
        onClick={loadMore}
        disabled={loading}
        isLoading={loading}
      >
        Load more
      </Button>}
    </Box>
  )
}

export default SellsView