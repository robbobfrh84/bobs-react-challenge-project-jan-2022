import React from 'react';
import { render, screen } from '@testing-library/react';

import OrdersList from './ordersList';

describe('Orders List', () => {
    test('renders with no prop', () => {
        render(
            <OrdersList
            />
        )
        const emptyDiv = document.getElementsByClassName('empty-orders');
        const arr = Array.from(emptyDiv);
        expect(arr.length).toBe(1);
    });

    test('renders one order', () => {
        const orders = [
            {
                order_item: "Food",
                quantity: "777",
                _id: 1
            }
        ];
        render(
            <OrdersList
                orders={orders}
            />
        )
        expect(screen.getByText('Food')).toBeInTheDocument();
        expect(screen.getByText(/^.*777.*$/gm)).toBeInTheDocument();
    });

    test('renders multiple orders', () => {
        const orders = [
            {
                order_item: "Food",
                quantity: "777",
                _id: 1
            },
            {
                order_item: "Drink",
                quantity: "888",
                _id: 2
            }
        ];
        render(
            <OrdersList
                orders={orders}
            />
        )
        expect(screen.getByText('Food')).toBeInTheDocument();
        expect(screen.getByText(/^.*777.*$/gm)).toBeInTheDocument();
        expect(screen.getByText('Drink')).toBeInTheDocument();
        expect(screen.getByText(/^.*888.*$/gm)).toBeInTheDocument();

    });

    test('verify time formating', () => {
        const orders = [
            {
                createdAt: "2022-04-17T21:09:05.048Z",
                _id: 1
            }
        ];
        render(
            <OrdersList
                orders={orders}
            />
        )
        expect(screen.getByText(/09:09:05/)).toBeInTheDocument();
  });
})
