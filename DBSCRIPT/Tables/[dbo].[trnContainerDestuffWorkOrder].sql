USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnContainerDestuffWorkOrder]    Script Date: 1/2/2024 4:24:10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerDestuffWorkOrder](
	[trnContainerDestuffWorkOrderID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnContainerDestuffWorkOrderPrefix] [varchar](20) NULL,
	[trnContainerDestuffWorkOrderNo] [varchar](255) NULL,
	[Surveyor] [varchar](255) NULL,
	[SurveyorID] [int] NULL,
	[Vendor] [varchar](255) NULL,
	[VendorID] [int] NULL,
	[Remarks] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL,
	[IsFinished] [bit] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder] ADD  DEFAULT ((0)) FOR [IsApproved]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


