import React from "react";
import { act, isElementOfType, Simulate} from "react-dom/test-utils";
import AppListItem from "../../components/AppListItem";
import { MemoryRouter, Link } from 'react-router-dom';
import { Router } from 'react-router';
import { render, unmountComponentAtNode } from "react-dom";
import { createMemoryHistory } from "history";
describe("Applications List Item", () => {
    describe("displays with props", () => {
        let container = null;
        beforeEach(() => {
            // setup a DOM element as a render target
            container = document.createElement("div");
            document.body.appendChild(container);
        });
        afterEach(() => {
            // cleanup on exiting
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        });
        it("should not render when a cohortName is empty", () => {
            const mockCohortName = ""
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} link=""/>
                    </MemoryRouter>, container);
                expect(container.querySelector('[data_test="appListItem_Segment"]')).toBeNull()
            });
        });
        it("should render when a cohortName is passed", () => {
            const mockCohortName = "test"
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} link=""/>
                    </MemoryRouter>, container)
            })
            expect(container.querySelector('[data_test="appListItem_Segment"]')).toBeTruthy()
            expect(container.querySelector('[data_test="appListItem_Segment"]').nodeName).toBe('DIV')
            expect(container.querySelector('h2').textContent).toBe(mockCohortName);
            expect(container.querySelector('[data_test="appListItem_Button"]').textContent).toBe('');
        });
        it("should render the correct text when a cohortName and cohortType are passed", () => {
            const mockCohortName = "test"
            const mockCohortType = "Frontend Development"
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} cohortType={mockCohortType} link=""/>
                    </MemoryRouter>
                , container)
            })
            expect(container.querySelector('h2').textContent).toBe(mockCohortName);
            expect(container.querySelector('[data_test="appListItem_Button"]').textContent).toBe(mockCohortType);
        });
        it(`should render the correct color for the data_test="appListItem_Button" when a cohortType is passed`, () => {
            const mockCohortName = "test"
            const mockCohortTypeFE = "Frontend Development"
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} cohortType={mockCohortTypeFE} link=""/>
                    </MemoryRouter>, container)
            })
            expect(container.querySelector('[data_test="appListItem_Button"]').className).toEqual(expect.stringContaining("pink"))
        });
        it(`should render the correct color for the data_test="appListItem_Button" when a cohortType is passed`, () => {
            const mockCohortName = "test"
            const mockCohortTypeBE = "Backend Development"
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} cohortType={mockCohortTypeBE} link=""/>
                    </MemoryRouter>, container)
            })
            expect(container.querySelector('[data_test="appListItem_Button"]').className).toEqual(expect.stringContaining("blue"))
        });
        it(`should render the correct color for the data_test="appListItem_Button" when a cohortType is passed`, () => {
            const mockCohortName = "test"
            const mockCohortType = ""
            act(() => {
                render(
                    <MemoryRouter>
                        <AppListItem cohortName={mockCohortName} cohortType={mockCohortType} link=""/>
                    </MemoryRouter>, container)
            })
            expect(container.querySelector('[data_test="appListItem_Button"]').className).toEqual(expect.stringContaining("teal"))
        });
    });
});