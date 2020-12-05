import * as amplify from "@aws-cdk/aws-amplify";
import { GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify";
import * as cdk from "@aws-cdk/core";
import { SecretValue } from "@aws-cdk/core";

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sourceCodeProvider = new GitHubSourceCodeProvider({
      owner: 'stephen-cloud',
      repository: 'cdk-amplify-sample',
      oauthToken: SecretValue.secretsManager('stephen-cloud-github-pat')
    });
    const amplifyApp = new amplify.App(this, "sample-react-app ", { sourceCodeProvider });
    const masterBranch = amplifyApp.addBranch("master");
  }
}
