/* eslint-disable class-methods-use-this */
import createError, { createErrorMissingRequiredField, createErrrorFieldTypeMismatch } from '../../../error';

import AbstractVisitor from '../../utils/AbstractVisitor';

class ValidateOpenAPISecuritySchema extends AbstractVisitor {
  static get ruleName() {
    return 'secuirty-schema';
  }

  get validators() {
    return {
      type(node, ctx) {
        if (!node.type) return createErrorMissingRequiredField('type', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (typeof node.type !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (!['apiKey', 'http', 'oauth2', 'openIdConnect'].includes(node.type)) return createError('The type value can only be one of the following "apiKey", "http", "oauth2", "openIdConnect" is required for the OpenAPI Security Scheme object.', node, ctx, { fromRule: this.rule, target: 'value', severity: this.config.level });
        return null;
      },
      description(node, ctx) {
        if (node.description && typeof node.description !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
      name(node, ctx) {
        if (node.type !== 'apiKey') return null;
        if (typeof node.name !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
      in(node, ctx) {
        if (node.type !== 'apiKey') return null;
        if (!node.in) return createErrorMissingRequiredField('in', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (typeof node.in !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (!['query', 'header', 'cookie'].includes(node.in)) return createError('The in value can only be one of the following "query", "header" or "cookie" for the OpenAPI Security Scheme object', node, ctx, { fromRule: this.rule, target: 'value', severity: this.config.level });
        return null;
      },
      scheme(node, ctx) {
        if (node.type !== 'http') return null;
        if (!node.scheme) return createErrorMissingRequiredField('scheme', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (typeof node.scheme !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
      bearerFormat(node, ctx) {
        if (node.bearerFormat && node.type !== 'http') return createError('The bearerFormat field is applicable only for http', node, ctx, { fromRule: this.rule, target: 'key', severity: this.config.level });
        if (node.bearerFormat && typeof node.bearerFormat !== 'string') return createErrrorFieldTypeMismatch('string', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
      flows(node, ctx) {
        if (node.type !== 'oauth2') return null;
        if (!node.flows) return createErrorMissingRequiredField('flows', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
      openIdConnectUrl(node, ctx) {
        if (node.type !== 'openIdConnect') return null;
        if (!node.openIdConnectUrl) return createErrorMissingRequiredField('openIdConnectUrl', node, ctx, { fromRule: this.rule, severity: this.config.level });
        if (typeof node.openIdConnectUrl !== 'string') return createErrrorFieldTypeMismatch('openIdConnectUrl', node, ctx, { fromRule: this.rule, severity: this.config.level });
        return null;
      },
    };
  }

  OpenAPISecuritySchema() {
    return {
      onEnter: (node, definition, ctx) => ctx.validateFields(
        this.config, this.rule, this.validators,
      ),
    };
  }
}

module.exports = ValidateOpenAPISecuritySchema;