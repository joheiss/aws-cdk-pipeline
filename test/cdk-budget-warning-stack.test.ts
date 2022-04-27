import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CdkBudgetWarningStack } from "../lib/cdk-budget-warning-stack";

describe('Monthly Cost Budget Warning Stack', () => {

    let app: App;
    let stack: CdkBudgetWarningStack;
    
    beforeAll(() => {
        app = new App();
        stack = new CdkBudgetWarningStack(app, 'MontlyCostBudgetWarningStack');
    });

    test('Stack', () => {
        const cfn = Template.fromStack(stack).toJSON();
        expect(cfn).toMatchSnapshot();
    });
});