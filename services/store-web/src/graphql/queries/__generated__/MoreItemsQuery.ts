/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ItemFilter, CursorInfo } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: MoreItemsQuery
// ====================================================

export interface MoreItemsQuery_items_edges_node_params {
  __typename: "ItemParams";
  txId: string;
  name: string;
  version: number;
  imageUrl: string;
  storageImageUrl: string | null;
  misc: any | null;
}

export interface MoreItemsQuery_items_edges_node_dapp {
  __typename: "User";
  id: string;
  address: string;
  name: string | null;
  image: any | null;
  meta: any | null;
  totalItems: number | null;
}

export interface MoreItemsQuery_items_edges_node {
  __typename: "Item";
  id: string;
  txId: string;
  name: string;
  quantity: number;
  reissuable: boolean;
  timestamp: any;
  params: MoreItemsQuery_items_edges_node_params;
  dapp: MoreItemsQuery_items_edges_node_dapp;
}

export interface MoreItemsQuery_items_edges {
  __typename: "ItemEdge";
  cursor: string;
  node: MoreItemsQuery_items_edges_node;
}

export interface MoreItemsQuery_items_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface MoreItemsQuery_items {
  __typename: "ItemConnection";
  edges: MoreItemsQuery_items_edges[] | null;
  pageInfo: MoreItemsQuery_items_pageInfo;
}

export interface MoreItemsQuery {
  items: MoreItemsQuery_items | null;
}

export interface MoreItemsQueryVariables {
  filter?: ItemFilter | null;
  cursorInfo?: CursorInfo | null;
}
