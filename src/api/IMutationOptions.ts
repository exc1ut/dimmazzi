export interface IMutataionOptions<TVariables, TContext, TData, TError> {
  mutationKey?: string
  onError?: (err: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void
  onMutate?: (variables: TVariables) => Promise<TContext | void> | TContext | void
  onSettled?: (
    data: TData,
    error: TError,
    variables: TVariables,
    context?: TContext
  ) => Promise<unknown> | void
  onSuccess?: (data: TData, variables: TVariables, context?: TContext) => Promise<unknown> | void
  retry?: number
  retryDelay?: number | ((retryAttempt: number, error: TError) => number)
  useErrorBoundary?: undefined | boolean | ((error: TError) => boolean)
  meta?: Record<string, unknown>
}
